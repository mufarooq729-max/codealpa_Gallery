# Luma Gallery

**Moments in focus** — A modern, interactive image gallery showcasing a hand-picked collection of photography across multiple categories.

## Overview

Luma Gallery is a beautifully designed web application that presents a curated collection of photographs in an interactive masonry layout. Users can explore images by category, preview photos in a lightbox, capture their own moments using their device camera, and interact with the gallery through intuitive controls.

## Features

### 📸 Gallery Features
- **Masonry Layout**: Responsive grid layout that adapts to different screen sizes
- **Category Filters**: Browse images by category:
  - All (view entire collection)
  - Nature
  - City
  - Portrait
  - Food
  - Architecture
- **Image Preview**: Click any image to view it in a fullscreen lightbox modal
- **Image Information**: See photo titles and categories in the preview

### 📷 Camera Capture
- **Live Camera Access**: Use the "Take a photo" button to access your device camera
- **Instant Capture**: Capture photos directly from your webcam
- **Gallery Integration**: Captured photos are added to the beginning of your gallery

### 💾 Photo Actions
- **Save Images**: Download images directly to your device
- **Share Images**: Share images using your device's native sharing options (where supported)
- **Delete Images**: Remove photos from your captured collection

### ✨ User Experience
- **Custom Cursor**: Interactive custom cursor that responds to UI elements
- **Smooth Interactions**: 3D card hover effects with rotation and perspective
- **Modern Design**: Clean, elegant interface with warm color palette
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior

## Project Structure

```
├── gallery.html      # Main HTML file - structure and modals
├── script.js         # JavaScript - functionality and interactivity
├── style.css         # CSS - styling and animations
└── README.md         # This file
```

## Technical Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Advanced styling with CSS variables, gradients, and animations
- **JavaScript (Vanilla)**: No external dependencies - pure JavaScript functionality
- **APIs Used**:
  - Web Cameras API (getUserMedia)
  - Canvas API (photo capture)
  - Fetch API (image downloads)
  - Web Share API (sharing)

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Camera/webcam access (for photo capture feature)

### Installation
1. Clone or download this project
2. Open `gallery.html` in your web browser
3. Start exploring!

### Usage
1. **Browse Gallery**: View the curated collection of images
2. **Filter by Category**: Click category buttons to filter images
3. **Preview Images**: Click any image to view in fullscreen
4. **Capture Photos**: Click "Take a photo" button to use your camera
5. **Save/Share**: Use the action buttons in the preview modal

## Color Palette

The gallery uses a warm, sophisticated color scheme:
- **Ink (Primary)**: #16130b
- **Paper (Background)**: #fffdf4
- **Muted (Accents)**: #716a55
- **Violet (Accent)**: #d88900
- **Pink (Accent)**: #ffc400
- **Aqua (Light)**: #ffe9a1

## Fonts

- **Outfit**: Primary font for headings and body text
- **DM Mono**: Monospace font for special elements

## Browser Compatibility

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Features Under the Hood

### Gallery Data Structure
Images are stored as an array with metadata:
- Category
- Title
- Image ID
- Dimensions (width × height)
- External image source (Picsum Photos API)

### Image Source
Images are sourced from [Picsum Photos](https://picsum.photos/) - a free service providing placeholder images.

### Responsive Design
The layout uses CSS Grid and Flexbox for responsive behavior, adapting gracefully from mobile to desktop sizes.

## Future Enhancement Ideas

- User image uploads
- Image favorites/bookmarks
- Advanced filtering (by date, size, etc.)
- Image editing capabilities
- User accounts and galleries
- Comment/rating system
- Dark mode toggle

## License

This project is open source and available for personal and commercial use.

## Credits

- **Photography**: Images from Picsum Photos
- **Fonts**: Google Fonts (Outfit, DM Mono)
- **Design Pattern**: Modern web design principles

---

Enjoy exploring Luma Gallery! 📸✨
