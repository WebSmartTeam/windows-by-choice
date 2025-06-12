// Service Worker for Windows by Choice PDF Downloads
const CACHE_NAME = 'wbc-pdfs-v1';
const PDF_CACHE = 'wbc-pdf-cache-v1';

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('WBC PDF Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        // Cache core assets for offline access
        '/',
        '/resources',
        '/manifest.json'
      ]);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('WBC PDF Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== PDF_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Handle fetch requests
self.addEventListener('fetch', (event) => {
  // Handle PDF generation requests
  if (event.request.url.includes('/api/generate-pdf')) {
    event.respondWith(handlePDFRequest(event.request));
    return;
  }

  // Handle other requests with network-first strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response
        const responseToCache = response.clone();
        
        // Cache successful responses
        if (response.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        
        return response;
      })
      .catch(() => {
        // If network fails, try cache
        return caches.match(event.request);
      })
  );
});

// Handle PDF generation and caching
async function handlePDFRequest(request) {
  try {
    // Try to generate PDF from network
    const response = await fetch(request);
    
    if (response.ok) {
      // Cache the PDF for offline access
      const cache = await caches.open(PDF_CACHE);
      await cache.put(request, response.clone());
      return response;
    }
    
    throw new Error('PDF generation failed');
  } catch (error) {
    // If network fails, try to get cached PDF
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback
    return new Response(
      JSON.stringify({
        error: 'PDF generation is currently unavailable offline',
        message: 'Please check your internet connection and try again'
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Handle background sync for lead data
self.addEventListener('sync', (event) => {
  if (event.tag === 'lead-data-sync') {
    event.waitUntil(syncLeadData());
  }
});

// Sync lead data when back online
async function syncLeadData() {
  try {
    // Get pending lead data from IndexedDB
    const pendingLeads = await getPendingLeads();
    
    for (const lead of pendingLeads) {
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(lead)
        });
        
        // Remove from pending queue
        await removePendingLead(lead.id);
      } catch (error) {
        console.error('Failed to sync lead:', error);
      }
    }
  } catch (error) {
    console.error('Lead sync failed:', error);
  }
}

// IndexedDB helpers for offline lead storage
function getPendingLeads() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('WBCLeadsDB', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['pendingLeads'], 'readonly');
      const store = transaction.objectStore('pendingLeads');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => resolve(getAllRequest.result);
      getAllRequest.onerror = () => reject(getAllRequest.error);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('pendingLeads')) {
        db.createObjectStore('pendingLeads', { keyPath: 'id' });
      }
    };
  });
}

function removePendingLead(leadId) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('WBCLeadsDB', 1);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['pendingLeads'], 'readwrite');
      const store = transaction.objectStore('pendingLeads');
      const deleteRequest = store.delete(leadId);
      
      deleteRequest.onsuccess = () => resolve();
      deleteRequest.onerror = () => reject(deleteRequest.error);
    };
  });
}

// Handle push notifications for lead alerts
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    if (data.type === 'new-lead') {
      event.waitUntil(
        self.registration.showNotification('New Lead Generated!', {
          body: `${data.leadName} downloaded ${data.guideName}`,
          icon: '/images/logo/413776ca-d0ec-471a-a4d9-4fbe072a37d0.png',
          badge: '/images/logo/413776ca-d0ec-471a-a4d9-4fbe072a37d0.png',
          tag: 'new-lead',
          actions: [
            {
              action: 'view-lead',
              title: 'View Lead'
            },
            {
              action: 'dismiss',
              title: 'Dismiss'
            }
          ]
        })
      );
    }
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'view-lead') {
    event.waitUntil(
      clients.openWindow('/admin/leads')
    );
  }
});

console.log('Windows by Choice PDF Service Worker loaded');