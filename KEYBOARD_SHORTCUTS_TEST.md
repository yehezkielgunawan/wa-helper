# Keyboard Shortcuts Testing Guide

This guide helps you test all keyboard shortcuts in the WhatsApp Helper application.

## 🧪 Testing Steps

### 1. OS Detection and Shortcuts Display
**Test:** Open the app on different operating systems
**Expected:**
- **Windows/Linux**: Shows "Ctrl + Enter" and "Ctrl + Shift + C" in shortcuts panel
- **macOS**: Shows "⌘ + Enter" and "⌘ + Shift + C" in shortcuts panel  
- **Mobile**: Keyboard shortcuts panel is completely hidden

### 2. Theme Toggle (Alt + T)
**Test:** Press `Alt + T` anywhere on the page
**Expected:** 
- Theme switches between light and dark mode
- Theme toggle button in header updates visually
- All elements adapt to new theme
- Works the same on all operating systems

### 3. Generate WhatsApp Link (Ctrl/Cmd + Enter)
**Test:** 
1. Enter a valid phone number (10+ digits)
2. Press `Ctrl + Enter` (Windows/Linux) or `Cmd + Enter` (Mac)

**Expected:**
- WhatsApp opens in new tab/window
- Toast notification: "🚀 Opening WhatsApp..."
- URL contains the phone number and message (if provided)

**Invalid Test:**
1. Enter invalid phone number (< 10 digits)
2. Press `Ctrl/Cmd + Enter`

**Expected:**
- Toast notification: "❌ Please enter a valid phone number"
- Focus moves to phone input field
- WhatsApp does not open

### 4. Copy Link (Ctrl/Cmd + Shift + C)
**Test:**
1. Enter a valid phone number (10+ digits)
2. Press `Ctrl + Shift + C` (Windows/Linux) or `Cmd + Shift + C` (Mac)

**Expected:**
- Link copied to clipboard
- Toast notification: "📋 Copying link..."
- Success panel appears with copied URL
- Screen reader announces "WhatsApp link copied to clipboard"

**Invalid Test:**
1. Enter invalid phone number (< 10 digits)
2. Press `Ctrl/Cmd + Shift + C`

**Expected:**
- Toast notification: "❌ Please enter a valid phone number"
- Focus moves to phone input field
- Nothing copied to clipboard

## 🎯 Accessibility Testing

### Screen Reader Testing
1. Use NVDA, JAWS, or VoiceOver
2. Test each keyboard shortcut
3. Verify announcements are made for:
   - Toast notifications
   - Success/error messages
   - Theme changes

### Keyboard Only Navigation
1. Use only Tab, Enter, Space, and arrow keys
2. Navigate through all elements
3. Test shortcuts without using mouse
4. Verify all functionality is accessible

### Visual Testing
1. Test with high contrast mode enabled
2. Test with browser zoom at 200%
3. Verify toast notifications are visible
4. Check keyboard shortcut help panel visibility

## 📱 Cross-Platform Testing

### Windows
- Test `Ctrl + Enter` for generate
- Test `Ctrl + Shift + C` for copy
- Test `Alt + T` for theme toggle

### macOS
- Test `Cmd + Enter` for generate
- Test `Cmd + Shift + C` for copy
- Test `Alt + T` for theme toggle

### Linux
- Test `Ctrl + Enter` for generate
- Test `Ctrl + Shift + C` for copy
- Test `Alt + T` for theme toggle

## 🐛 Common Issues to Check

1. **Shortcuts not working globally**: Verify event listeners are attached to document
2. **Toast notifications not appearing**: Check z-index and positioning
3. **Screen reader not announcing**: Verify ARIA attributes and live regions
4. **Theme toggle not working**: Check useEffect cleanup and event listeners
5. **Validation not triggering**: Verify form validation logic

## ✅ Test Checklist

- [ ] **OS Detection**: Correct shortcuts shown (Ctrl vs ⌘)
- [ ] **Mobile Responsive**: Shortcuts panel hidden on mobile devices
- [ ] Alt + T works from any focus point on all operating systems
- [ ] Ctrl/Cmd + Enter works with valid phone number
- [ ] Ctrl/Cmd + Enter shows error with invalid phone number
- [ ] Ctrl/Cmd + Shift + C works with valid phone number
- [ ] Ctrl/Cmd + Shift + C shows error with invalid phone number
- [ ] Toast notifications appear and disappear correctly
- [ ] Screen reader announces all changes
- [ ] Keyboard shortcuts work in high contrast mode
- [ ] Shortcuts work with browser zoom up to 200%
- [ ] All shortcuts respect reduced motion preferences
- [ ] **Cross-platform**: Test on Windows, macOS, and Linux
- [ ] **Mobile test**: Verify no shortcuts panel on phones/tablets

## 🔄 Automated Testing Commands

```bash
# Build and test
pnpm build

# Run development server for manual testing
pnpm dev

# Run accessibility linting
pnpm biome:lint:ci
```

---

**Note**: If any keyboard shortcut conflicts with browser or OS shortcuts, the application shortcuts may not work as expected. This is normal behavior and doesn't indicate a bug in the application. 