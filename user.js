/** SCROLL ***/
// Disable smooth scrolling momentum
user_pref("general.smoothScroll.currentVelocityWeighting", 0);
// Set minimum and maximum duration for smooth scrolling on mouse wheel
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 300);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 350);
// Disable deceleration weighting (instant stop)
user_pref("general.smoothScroll.stopDecelerationWeighting", 1);
// Set continuous motion max delta for smooth scroll physics
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
// Enable smooth scroll physics
user_pref("general.smoothScroll.msdPhysics.enabled", true);
// Set spring constants for smooth scroll physics
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
// Set slowdown parameters for smooth scroll physics
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 50);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
// Set minimum scroll amount for mouse wheel
user_pref("mousewheel.min_line_scroll_amount", 30);
// Set scroll distance for vertical scrollboxes (e.g., webpages)
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
