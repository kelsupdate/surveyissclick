# TODO: Add Popup Messages Feature

## Completed Tasks
- [x] Create TODO.md file with implementation steps
- [x] Add new Jotai atom `showWelcomeMessages` in `src/state/index.js`

## Pending Tasks
- [x] Create `src/components/NotificationMessages.js` component with message queue and animations
- [x] Update `src/screens/auth/Login.js` to set `showWelcomeMessages` to true after successful login
- [x] Update `src/screens/auth/Register.js` to set `showWelcomeMessages` to true after successful registration
- [x] Add `<NotificationMessages />` to `src/screens/app/Home.js`
- [x] Add `<NotificationMessages />` to `src/screens/app/Profile.js`
- [x] Add `<NotificationMessages />` to `src/screens/app/Referrals.js`
- [x] Test message display and animations on specified screens
- [x] Verify messages don't appear on excluded screens
