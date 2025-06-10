#!/bin/bash

# Windows by Choice - GitHub Deployment Script
# Farm ID: WINDOWS-BY-CHOICE-001
# Parent: ANISH-MASTER-001

echo "🚀 Windows by Choice - Preparing GitHub Push"
echo "Farm: WINDOWS-BY-CHOICE-001"
echo "Site: https://www.windowsbychoice.co.uk/"
echo ""

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Cannot proceed with deployment."
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "🔄 Requesting GitHub push from parent farm..."
echo "Repository will be created: windows-by-choice"
echo "Organisation: WebSmartTeam"
echo ""
echo "📨 Contact parent farm ANISH-MASTER-001 for GitHub deployment."
echo "Include this build in the push request."