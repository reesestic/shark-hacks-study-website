# SharkHack 2025 Website Development
# Team Members: Reese, Kevin, Olivia and Travis
This is the code to our submission to SharkHack2025 at Simmons University, geared toward Bioharmony and mental health in students and employees.

I personally contributed a lot to this project, whose description is provided in depth below.
I designed much of the implementation of the study page, creating all backgrounds, sounds and interactive pieces outside of the timer. I helped research to find impactful tools to implement and aided in general bug fixes on the schedule and home pages as well. I helped debug file path issues linking the pages together as well as created a presentation for the project. I helped steer the project as a vision and competitor for awards and ensured we had a clear goal to execute at all times. 

# Purpose & Design
Clock In is designed to confront the issue of low motivation within stressed students/employees. Through research we found that students with mental struggles report low motivation levels, so Clock In is designed to make starting easier! 
We provide a simplistic schedule input system as well as a minimalistic yet personalizable study timer page to help students plan and begin their studies quickly! The schedule page allows a user to input hours during the day that they are not free. After they block their available times, they can input up to 5 tasks by name, followed by the task's time requirement and importance level. Then, three schedules are created, allowing the user to select the option they most prefer. 
Once their schedule is created, they can navigate to the study page to then begin implementing the schedule they are given (or studying on their own). There is a timer with a green bar and an ascending timer to minimize stress when using the website. There are emojis to add an entertainment and fun factor when the user becomes stressed, and there is a dropdown menu of available backgrounds/sounds to let the user create an ultimate personal virtual study space. Clock In combines planning with actualization to help even the most stressed students begin to tackle their workload.

# Implementation
Clock In was created by a combination of HTML, CSS, JavaScript, and Python via Flask. Copilot helped aid in launching the website to begin creation.

# Production Roadblocks & Challenges
We experienced a multitude of issues having built the website across 4 different computers in different environments. We had issues with linking sounds/images across computers to ensure a working product due to Flask pathing errors. Flask was being weird with routing to different pages. Github pulling and merging also presented issues, as pulling code would work on certain environments but not on others, so we had to rework code and versions until it worked uniformly across all 4 devices. We attempted to utilize a Gemini AI API to create personalize study tips for users below their timer, but it was creating many bugs, so we are saving this specific implementation for post-Hackathon implementation.

# Accomplishments
Our team was very unfamiliar with web development/CSS/AI Implementations before beginning SharkHack, so developing our skills in these fields was rewarding for all team members. It was a great crash course in UI design, front and back-end development, and many other areas. Additionally, as programmers new to hackathons, it was a very enjoyable experience and encouraged us to work harder and compete in future Hackathons again.

# Future Aspirations
Our current most-desired implementation is the assimilation of Google Calendar. We would like for users to be able to input their Google Calendar into the schedule builder or their class schedule to make schedule creation even faster for users. With this change comes another revision, which is the adjustment from daily to weekly schedules for users. If a user can create a weekly schedule saved to a user profile, it would save the user from needing to re-input their schedule each time they would like to create one. The user profile would contain any user-given data, from classes to work schedules to clubs to even study preferences or an avatar.
 We would like to add more options to the timer, like adding customizable break intervals, pre-existing formats like a Pomodoro timer, or other customizable options to diversify the study increments. We would still like to use an AI API to generate study tips guided by mental health and physical wellness during studying to keep users aware of their posture, hydration and other important non-mental factors while studying.
 Finally, we would like to incorporate the emojis to a cumulative user emotion tracking system to quantitatively track user emotion and experience over longer intervals to show if the mental health and stress reduction methods are producing quantifiable results.
