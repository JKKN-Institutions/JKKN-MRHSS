# Holiday Images for Academic Calendar

This directory contains images for holidays displayed in the academic calendar.

## Required Images:

### National Holidays
- `new-year.jpg` - New Year celebration image
- `republic-day.jpg` - Indian flag and Republic Day celebration
- `independence-day.jpg` - Indian flag and Independence Day celebration
- `gandhi-jayanti.jpg` - Mahatma Gandhi portrait or related image

### Festival Holidays
- `tamil-new-year.jpg` - Tamil New Year celebration with traditional elements
- `dussehra.jpg` - Dussehra festival celebration
- `diwali.jpg` - Diwali lights and diyas
- `christmas.jpg` - Christmas tree and decorations

### Other Holidays
- `labour-day.jpg` - Workers and labour day symbols
- `summer-break.jpg` - Summer vacation theme
- `winter-break.jpg` - Winter vacation theme

## Image Specifications:
- **Format**: JPG or PNG
- **Size**: Recommended 300x200px minimum
- **Aspect Ratio**: 3:2 preferred
- **Quality**: High quality, school-appropriate images
- **Content**: Should be culturally appropriate and educational

## Usage:
These images are automatically loaded in the calendar when events are displayed. If an image is missing, the system will fall back to emoji icons.

## Adding New Images:
1. Add the image file to this directory
2. Update the `academicEvents` data in `app/academic-calendar/page.tsx`
3. Set the `image` property to the correct path: `/images/holidays/your-image.jpg` 