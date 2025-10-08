# Admin Dashboard - Quick Start Guide

## 🚀 Getting Started

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Access the Admin Dashboard

**Login Page**: http://localhost:3000/login

**Demo Credentials**:
- Email: `admin@college.com`
- Password: `admin123`

### 3. After Login

You'll be redirected to: http://localhost:3000/dashboard

## 📋 Available Routes

| Route | Description |
|-------|-------------|
| `/login` | Admin login page |
| `/dashboard` | Dashboard overview with stats |
| `/dashboard/events` | Manage events (CRUD) |
| `/dashboard/posts` | Manage blog posts (CRUD) |
| `/dashboard/categories` | Manage post categories |
| `/dashboard/media` | Upload and manage images |
| `/dashboard/settings` | Profile and theme settings |

## 🎯 Key Features

### Events Module
- Add events with date, time, venue, description
- Automatic status (Upcoming/Past) based on date
- Search and filter by status
- Add tags for organization
- Pagination support

### Posts Module
- Rich text editor for content creation
- Categorize posts
- Draft/Published status
- Add thumbnails
- Filter by category and status

### Categories Module
- Create custom categories
- Auto-generated slugs
- Track post count per category
- Cannot delete categories with posts

### Media Library
- Upload multiple images at once
- Preview images in grid
- Copy image URLs
- Download or delete files
- Search by filename

### Settings
- Toggle Dark/Light mode
- Update profile info (mock)
- Change password (mock)
- Clear all data option

## 🎨 UI Features

- **Dark Mode**: Toggle in top bar or settings page
- **Responsive**: Works on desktop, tablet, and mobile
- **Animations**: Smooth transitions with Framer Motion
- **Notifications**: Real-time toast messages for all actions
- **Search**: Quick search in top bar (UI only)
- **Sidebar**: Collapsible on mobile devices

## 💾 Data Storage

All data is stored in browser localStorage:
- Works offline after first load
- Data persists across sessions
- Can be cleared from Settings → Danger Zone

## 🔒 Authentication

- Protected routes automatically redirect to login
- Logout clears session and redirects to login
- Token stored in localStorage
- Simple client-side authentication (demo only)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column, hamburger menu)
- **Tablet**: 768px - 1023px (2-3 columns, sidebar toggle)
- **Desktop**: ≥ 1024px (full sidebar, multi-column grids)

## 🎨 Theme Colors

- **Primary Gradient**: Blue to Purple
- **Success**: Green
- **Error**: Red
- **Warning**: Orange
- **Neutral**: Gray shades

## ⚡ Quick Actions

### Create an Event
1. Dashboard → Events → "Add Event"
2. Fill required fields (title, date, time, venue, description)
3. Optionally add image URL and tags
4. Submit → Event appears with auto-detected status

### Write a Post
1. Dashboard → Posts → "New Post"
2. Add title, select category, add description
3. Use rich text editor for content
4. Choose Draft or Published
5. Submit → Post appears in list

### Upload Media
1. Dashboard → Media → "Upload Media"
2. Select one or multiple images
3. Files appear immediately in grid
4. Click any image to view details or delete

### Change Theme
**Quick**: Click sun/moon icon in top bar
**Detailed**: Settings → Appearance → Toggle switch

## 🔧 Customization

### Change Default Categories
Edit `app/admin/utils/storage.ts` → `getCategories()` function

### Modify Pagination
Change `itemsPerPage` constant in respective page files

### Adjust Colors
Update Tailwind classes in component files

## 📝 Development Tips

### Adding New Features
1. Create new page in `/dashboard/` directory
2. Add route to sidebar in `app/admin/components/sidebar.tsx`
3. Use existing TypeScript interfaces or create new ones
4. Follow CRUD pattern from existing modules
5. Add toast notifications for user feedback

### TypeScript Types
All data types are defined in `app/admin/types/index.ts`

### Storage Functions
All localStorage functions in `app/admin/utils/storage.ts`

### Authentication Functions
All auth functions in `app/admin/utils/auth.ts`

## 🐛 Troubleshooting

### Login not working?
- Clear browser cache and localStorage
- Use exact credentials: `admin@college.com` / `admin123`

### Data not persisting?
- Check browser localStorage is enabled
- Private browsing may prevent storage

### Dark mode not applying?
- Check localStorage for `darkMode` key
- Clear theme preference and toggle again

### Build errors?
- Run `npm install` to ensure all dependencies
- Check TypeScript errors with `npm run build`

## 📚 File Structure

```
app/
├── admin/               # Shared admin utilities
│   ├── components/      # Layout components
│   ├── types/          # TypeScript interfaces
│   └── utils/          # Helper functions
├── dashboard/          # Dashboard pages
│   ├── categories/
│   ├── events/
│   ├── media/
│   ├── posts/
│   ├── settings/
│   ├── layout.tsx
│   └── page.tsx
└── login/              # Login page
```

## 🚢 Production Deployment

Before deploying to production:

1. Replace dummy auth with real authentication
2. Connect to actual database instead of localStorage
3. Add API routes for backend operations
4. Implement proper security measures
5. Add environment variables for sensitive data
6. Enable API rate limiting
7. Add proper error logging

## 📞 Support

For detailed documentation, see `ADMIN_DASHBOARD_README.md`

---

**Ready to manage your college website! 🎓**

