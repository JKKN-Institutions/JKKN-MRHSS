# Admin Dashboard System

A complete, modern admin dashboard for managing a college website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### 🔐 Authentication System
- **Login Page** (`/login`)
  - Email and password authentication
  - Remember me functionality
  - Dummy credentials for testing
  - Protected routes with automatic redirection

**Demo Credentials:**
- Email: `admin@college.com`
- Password: `admin123`

### 📊 Dashboard Overview (`/dashboard`)
- Real-time statistics cards showing:
  - Total Events (with upcoming count)
  - Total Posts (with published count)
  - Media Files count
  - Active Categories count
- Recent activity feed
- Quick action buttons
- Responsive grid layout

### 📅 Events Module (`/dashboard/events`)
- **CRUD Operations**: Create, Read, Update, Delete
- **Fields**: Title, Date, Time, Venue, Description, Image URL, Tags
- **Features**:
  - Automatic status detection (Upcoming/Past)
  - Search functionality
  - Filter by status (All/Upcoming/Past)
  - Card-based grid layout
  - Modal for add/edit operations
  - Pagination (6 items per page)
  - Image preview with fallback
  - Tag management

### 📰 Posts Module (`/dashboard/posts`)
- **CRUD Operations**: Create, Read, Update, Delete
- **Fields**: Title, Category, Thumbnail, Short Description, Full Content, Author, Status
- **Features**:
  - Rich text editor (React Quill) with formatting tools
  - Publish/Draft status toggle
  - Filter by status and category
  - Search functionality
  - Table layout with thumbnails
  - Modal for add/edit operations
  - Pagination (8 items per page)
  - Quick status change from table

### 📂 Categories Module (`/dashboard/categories`)
- **CRUD Operations**: Add, Edit, Delete
- **Features**:
  - Auto-generated slugs
  - Post count tracking
  - Prevent deletion of categories with posts
  - Duplicate name validation
  - Card-based grid layout
  - Default categories (Academic, Sports, Cultural, Announcements)

### 🖼️ Media Library (`/dashboard/media`)
- **Features**:
  - Multiple file upload
  - Image preview in grid layout
  - Search functionality
  - File information modal with:
    - File size
    - File type
    - Upload date
    - URL copy functionality
    - Download option
  - Delete functionality
  - Pagination (12 items per page)
  - Responsive grid (2-6 columns)

### ⚙️ Settings Page (`/dashboard/settings`)
- **Profile Management**:
  - Update name and email (mock)
  - User profile display
  - Quick stats sidebar
- **Security**:
  - Change password form (mock)
  - Password validation
- **Appearance**:
  - Dark/Light mode toggle with smooth transition
  - Persistent theme preference
- **Danger Zone**:
  - Clear all data option

## 🎨 Design Features

### UI/UX
- **Clean & Modern**: Inspired by Notion, Vercel, and Framer
- **Fully Responsive**: Desktop, tablet, and mobile optimized
- **Dark Mode**: Complete dark mode support with smooth transitions
- **Animations**: Framer Motion for smooth page transitions and interactions
- **Toast Notifications**: Real-time feedback for all actions (react-hot-toast)

### Layout Components
- **Sidebar Navigation**: Collapsible on mobile with icons
- **Top Bar**: 
  - Global search
  - Notification bell with dropdown
  - User profile dropdown
  - Dark mode toggle
- **Protected Routes**: Automatic authentication check and redirection

## 📁 Project Structure

```
app/
├── admin/
│   ├── components/
│   │   ├── protected-route.tsx    # Route protection wrapper
│   │   ├── sidebar.tsx            # Dashboard sidebar
│   │   └── top-bar.tsx            # Dashboard top bar
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   └── utils/
│       ├── auth.ts                # Authentication functions
│       └── storage.ts             # LocalStorage management
├── dashboard/
│   ├── categories/
│   │   └── page.tsx               # Categories management
│   ├── events/
│   │   └── page.tsx               # Events management
│   ├── media/
│   │   └── page.tsx               # Media library
│   ├── posts/
│   │   └── page.tsx               # Posts management
│   ├── settings/
│   │   └── page.tsx               # Settings page
│   ├── layout.tsx                 # Dashboard layout wrapper
│   └── page.tsx                   # Dashboard overview
├── login/
│   └── page.tsx                   # Login page
└── globals.css                    # Global styles + React Quill styles
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Rich Text Editor**: React Quill
- **Notifications**: React Hot Toast
- **Date Handling**: date-fns
- **Storage**: LocalStorage (for demo purposes)

## 🔧 Installation & Setup

1. **Dependencies are already installed**. The project includes:
   - `react-quill` - Rich text editor
   - `react-hot-toast` - Toast notifications
   - `date-fns` - Date formatting
   - `framer-motion` - Animations
   - `lucide-react` - Icons

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Access the application**:
   - Main site: `http://localhost:3000`
   - Login: `http://localhost:3000/login`
   - Dashboard: `http://localhost:3000/dashboard`

## 🔑 Authentication Flow

1. Navigate to `/login`
2. Enter credentials:
   - Email: `admin@college.com`
   - Password: `admin123`
3. Click "Sign In"
4. Redirected to `/dashboard`
5. Session stored in localStorage
6. Access all dashboard features
7. Click "Logout" to clear session

## 💾 Data Storage

All data is stored in browser localStorage for demo purposes:
- `admin_auth_token` - Authentication token
- `admin_user_data` - User information
- `admin_events` - Events data
- `admin_posts` - Posts data
- `admin_categories` - Categories data
- `admin_media` - Media files data
- `darkMode` - Theme preference

## 🎯 Key Features Implementation

### TypeScript Interfaces
All modules use strongly-typed interfaces:
- `Event` - Event data structure
- `Post` - Post data structure
- `Category` - Category data structure
- `MediaFile` - Media file data structure
- `User` - User data structure

### CRUD Operations
Every module implements full CRUD:
- **Create**: Modal forms with validation
- **Read**: Filtered lists with search and pagination
- **Update**: Edit via modal with pre-filled data
- **Delete**: Confirmation dialog before deletion

### Search & Filter
- Real-time search across relevant fields
- Status filters (Published/Draft, Upcoming/Past)
- Category filters for posts
- Debounced search for performance

### Pagination
- Configurable items per page
- Page number buttons
- Previous/Next navigation
- Disabled state for edge cases

### Toast Notifications
Success and error messages for:
- Login/Logout
- Create operations
- Update operations
- Delete operations
- Theme changes
- Copy to clipboard

### Dark Mode
- Toggle in top bar and settings
- Persistent preference
- Smooth transitions
- React Quill editor styled for dark mode
- All components support dark mode

## 🚦 Usage Guide

### Creating an Event
1. Go to Events page
2. Click "Add Event"
3. Fill in all required fields
4. Add tags (comma-separated)
5. Submit - status auto-detected by date

### Creating a Post
1. Go to Posts page
2. Click "New Post"
3. Fill in title, category, description
4. Use rich text editor for content
5. Choose Draft or Published status
6. Submit

### Managing Categories
1. Go to Categories page
2. Click "Add Category"
3. Enter category name (slug auto-generated)
4. Categories with posts can't be deleted

### Uploading Media
1. Go to Media Library
2. Click "Upload Media"
3. Select one or multiple images
4. Files appear in grid immediately
5. Click any image to preview/manage

### Changing Theme
**Option 1**: Click sun/moon icon in top bar
**Option 2**: Go to Settings → Appearance → Toggle switch

## 📱 Responsive Design

- **Desktop** (1024px+): Full sidebar, multi-column grids
- **Tablet** (768px-1023px): Collapsible sidebar, 2-3 columns
- **Mobile** (< 768px): Hamburger menu, single column

## 🎨 Color Scheme

- **Primary**: Blue (500-600)
- **Secondary**: Purple (500-600)
- **Success**: Green (500-600)
- **Error**: Red (500-600)
- **Warning**: Orange (500-600)
- **Neutral**: Gray (50-900)

## 🔒 Security Notes

This is a demo implementation with:
- Hardcoded credentials
- Client-side only authentication
- LocalStorage for data persistence

**For production, implement**:
- Real backend API
- Secure authentication (JWT, OAuth)
- Database storage
- API rate limiting
- Input sanitization
- XSS protection

## 📝 License

This admin dashboard system is part of the JKKN-MRHSS college website project.

## 🤝 Contributing

When adding new features:
1. Follow existing code structure
2. Use TypeScript interfaces
3. Implement responsive design
4. Add dark mode support
5. Include toast notifications
6. Add proper error handling
7. Update this README

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**

