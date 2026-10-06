

## Plan: Website Updates — Footer, Navigation, Home, Faculties, Admissions, Campus Life Gallery

### 1. Footer — Update "About Us" link
**File:** `src/components/Footer.tsx`
- Change `<Link to="/about"` to `<Link to="/about/overview"` in the Quick Links section (line 37).

### 2. Navigation — Fix menu hover text visibility
**File:** `src/components/ui/navigation-menu.tsx`
- The `navigationMenuTriggerStyle` (line 47) uses `hover:bg-accent hover:text-accent-foreground`. The issue is likely that `accent` color and text blend together.
- Update the trigger style to use `hover:bg-primary/10 hover:text-primary` for better contrast.
- Also update the dropdown item hover classes in `src/components/Navbar.tsx` (lines 195-196, 209) from `hover:bg-accent/70 hover:text-accent-foreground` to `hover:bg-primary/10 hover:text-primary`.

### 3. Home Page — Hero "Learn More" button redirect
**File:** `src/pages/Home.tsx`
- Line 187: Change `<Link to="/about">` to `<Link to="/about/overview">` for the hero section "Learn More" button.

### 4. Faculties — Remove SOUDAGAR PAWAR
**File:** `src/pages/about/OurFaculties.tsx`
- Remove the entry for "SOUDAGAR PAWAR" from the `teachingStaff` array (lines 105-110).
- Also remove the `teachingStaff15` import (line 16) if no longer used.

**File:** `src/pages/Home.tsx`
- Remove SOUDAGAR PAWAR from the `faculty` array (line 109).
- Remove the `teachingStaff15` import (line 39) if no longer used elsewhere on the page. Need to check if it's used in management section — it's not, it's only in faculty array.

### 5. Admissions — Remove "Fees & Financial Aid" section
**File:** `src/pages/Admissions.tsx`
- Remove the `fees` data array (lines 25-31).
- Remove the entire "Fees & Financial Aid" section (lines 203-237).

### 6. Campus Life — Replace gallery with images from Gallery page
**File:** `src/pages/CampusLife.tsx`
- Replace the current gallery section with a simplified grid using the same images from the Gallery page (`infra1-3`, `event1-3`, `sports1`, `sports-gallery-2`, `sports3`, `lab1`, `science-lab`, `academics-lab`).
- Import these assets and display in a clean 3-column grid without category tabs — just show all mixed images with minimal hover (zoom only, no text overlay).
- Add a "View Full Gallery" link/button pointing to `/campus-life/gallery`.
- Remove old imports (`sportsImage`, `culturalImage`, `classroomImage`) and the `Tabs` components if no longer needed.

### Technical Notes
- Navigation hover fix addresses the contrast issue where `accent` background + `accent-foreground` text may not have sufficient contrast. Using `primary/10` bg with `primary` text ensures visibility.
- The CampusLife gallery will reuse the same image imports as the Gallery page for consistency.

