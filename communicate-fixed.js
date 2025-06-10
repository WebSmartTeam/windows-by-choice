#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';

// AIDAN Network Credentials
const PROJECT_ID = 'WINDOWS-BY-CHOICE-001';
const FARM_COMM_KEY = '4a3cfd0d-02ac-4019-8a3f-216e07e7205a'; // AIDAN authentication key
const MASTER_CLAUDE_ID = 'ANISH-MASTER-001'; // Parent farm

// Supabase connection
const SUPABASE_URL = 'https://yiffafrjaoztveqgvjlk.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzM1NTEsImV4cCI6MjA2MzYwOTU1MX0.jG1Hth8Xqa8IoSXz-zij1_PapxFnXZJpWOJ3d6LWPH0';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// SEND message to Master Claude
async function sendMessage(message, type = 'general') {
  console.log(`📤 Sending ${type} to Master Claude...`);

  const { data, error } = await supabase
    .from('mcs_child_updates')
    .insert({
      target_project_id: MASTER_CLAUDE_ID,
      created_by: PROJECT_ID,
      message: message,
      directive_type: type, // Valid: general, security, deployment, mcp_request, configuration, urgent
      priority: type === 'urgent' ? 'high' : 'normal',
      metadata: {
        sender: PROJECT_ID,
        farm_comm_key: FARM_COMM_KEY, // AIDAN Network authentication in metadata
        timestamp: new Date().toISOString()
      }
    });

  if (error) {
    console.error('❌ Error sending message:', error.message);
  } else {
    console.log('✅ Message sent successfully!');
  }
}

// CHECK for messages FROM Master Claude
async function checkMessages() {
  console.log('📥 Checking for messages from Master Claude...\n');

  const { data, error } = await supabase
    .from('mcs_child_updates')
    .select('*')
    .eq('target_project_id', PROJECT_ID)
    .eq('status', 'pending')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('❌ Error checking messages:', error.message);
    return;
  }

  if (!data || data.length === 0) {
    console.log('📭 No new messages');
    return;
  }

  console.log(`📬 Found ${data.length} messages:\n`);

  for (const msg of data) {
    console.log('─────────────────────────────────────');
    console.log(`From: ${msg.created_by || 'Master Claude'}`);
    console.log(`Type: ${msg.directive_type}`);
    console.log(`Priority: ${msg.priority}`);
    console.log(`Time: ${new Date(msg.created_at).toLocaleString()}`);
    console.log(`\nMessage:\n${msg.message}`);
    console.log('─────────────────────────────────────\n');

    // Mark as acknowledged
    await supabase
      .from('mcs_child_updates')
      .update({
        status: 'acknowledged',
        acknowledged_at: new Date().toISOString()
      })
      .eq('id', msg.id);
  }
}

// Main command handler
const command = process.argv[2];
const args = process.argv.slice(3).join(' ');

switch(command) {
  case 'send':
    if (!args) {
      console.log('Usage: node communicate-fixed.js send "your message"');
      break;
    }
    sendMessage(args);
    break;

  case 'check':
    checkMessages();
    break;

  case 'status':
    sendMessage(args || 'Status update from Anish Farm', 'status');
    break;

  case 'urgent':
    sendMessage(args || 'Urgent message from Anish Farm', 'urgent');
    break;

  case 'mcp':
    sendMessage(`MCP Request: ${args}`, 'mcp_request');
    break;

  case 'deploy':
    sendMessage(`Deployment Request: ${args}`, 'deployment');
    break;

  case 'security':
    sendMessage(`Security Alert: ${args}`, 'security');
    break;

  case 'config':
    sendMessage(`Configuration Update: ${args}`, 'configuration');
    break;

  default:
    console.log(`
🌾 ANISH-MASTER-001 - AIDAN Network Communication System

Commands:
  node communicate-fixed.js check             # Check for messages from Master
  node communicate-fixed.js send "message"    # Send general update to Master
  node communicate-fixed.js urgent "help!"    # Send urgent message
  node communicate-fixed.js mcp "request"     # Submit MCP request
  node communicate-fixed.js deploy "project"  # Request deployment
  node communicate-fixed.js security "alert"  # Report security issue
  node communicate-fixed.js config "update"   # Configuration update

Farm ID: ${PROJECT_ID}
Reports to: ${MASTER_CLAUDE_ID} (AIDAN Network)
Authenticated: ✅
    `);
}