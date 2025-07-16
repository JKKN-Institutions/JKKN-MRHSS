# Event Images for Academic Calendar

This directory contains images for school events displayed in the academic calendar.

## Required Images:

### School Events
- `valentines-day.jpg` - Valentine's Day celebration
- `womens-day.jpg` - Women's Day celebration
- `teachers-day.jpg` - Teachers' Day celebration
- `childrens-day.jpg` - Children's Day celebration
- `sports-day.jpg` - Annual sports day activities
- `new-academic-year.jpg` - School opening ceremony
- `school-reopens.jpg` - Students returning to school
- `admission.jpg` - New student admission process
- `results.jpg` - Result declaration ceremony

### Examination Images
- `exam.jpg` - Students taking exams
- `first-term-exam.jpg` - First term examination
- `second-term-exam.jpg` - Second term examination
- `final-exam.jpg` - Final examination
- `exam-end.jpg` - Exam completion celebration

## Image Specifications:
- **Format**: JPG or PNG
- **Size**: Recommended 300x200px minimum
- **Aspect Ratio**: 3:2 preferred
- **Quality**: High quality, school-appropriate images
- **Content**: Should show students, teachers, or school activities

## Usage:
These images are automatically loaded in the calendar when events are displayed. The system gracefully handles missing images by falling back to emoji icons.

## Adding New Images:
1. Add the image file to this directory
2. Update the `academicEvents` data in `app/academic-calendar/page.tsx`
3. Set the `image` property to the correct path: `/images/events/your-image.jpg` 