# MCP Configuration Guide for Windows/WSL

## 📍 Claude Desktop Config Location

### On Windows
The `claude_desktop_config.json` file is typically located at:
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Full path**: `C:\Users\<USERNAME>\AppData\Roaming\Claude\claude_desktop_config.json`

### On WSL
Since we're running in WSL, the Windows path is accessible at:
- **WSL path**: `/mnt/c/Users/<USERNAME>/AppData/Roaming/Claude/claude_desktop_config.json`

## 🛠️ Step-by-Step Configuration

### 1. Check if config file exists
```bash
# From WSL
ls -la /mnt/c/Users/ANEESH/AppData/Roaming/Claude/
```

### 2. Create or edit the config file
```bash
# Navigate to Claude config directory
cd /mnt/c/Users/ANEESH/AppData/Roaming/Claude/

# Create/edit config file
nano claude_desktop_config.json
```

### 3. Add AIDAN Platform MCP Configuration
```json
{
  "mcpServers": {
    "aidan-platform": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-stdio",
        "https://mcp.aidan.build/discover"
      ]
    }
  }
}
```

### 4. For multiple MCPs, use this format:
```json
{
  "mcpServers": {
    "aidan-platform": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-stdio", "https://mcp.aidan.build/discover"]
    },
    "another-mcp": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-stdio", "https://example.com/mcp"]
    }
  }
}
```

## ⚠️ Important Notes

### Windows/WSL Considerations
1. **File permissions**: Ensure the file is readable by Claude Desktop
2. **Path separators**: Use forward slashes in JSON even on Windows
3. **Restart required**: Claude Desktop must be restarted after config changes
4. **Node.js required**: Ensure Node.js is installed on Windows (not just WSL)

### Troubleshooting
1. **Config not loading**: Check file syntax with JSON validator
2. **MCP not connecting**: Verify network access to MCP endpoints
3. **Permission issues**: Run Claude Desktop as administrator if needed

## 🔍 Verify Configuration

### 1. Check file exists and is valid JSON
```bash
# From WSL
cat /mnt/c/Users/ANEESH/AppData/Roaming/Claude/claude_desktop_config.json | jq '.'
```

### 2. Test MCP endpoint
```bash
# Test AIDAN platform endpoint
curl https://mcp.aidan.build/discover | jq '.'
```

## 🚀 Next Steps

1. **Locate config file**: Check if it exists at the Windows path
2. **Add MCP configuration**: Copy the AIDAN platform config
3. **Restart Claude Desktop**: For changes to take effect
4. **Verify MCPs available**: Check if new tools appear in Claude

## 📝 Example Full Configuration
```json
{
  "mcpServers": {
    "aidan-platform": {
      "command": "npx",
      "args": [
        "@modelcontextprotocol/server-stdio",
        "https://mcp.aidan.build/discover"
      ]
    }
  },
  "theme": "system",
  "telemetry": true
}
```

**Note**: The exact location may vary based on Claude Desktop version and installation method.