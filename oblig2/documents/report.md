## Report Oblig 2: Poster 2

#### Extracting elements and implementing the poster
We started by downloading the poster and using Adobe Illustrator to extract the svg elements. We used the svgomg to make the file smaller, and more readable.
From there we added the code to our index.html, and ensured the right were right. Here we needed to rewrite some class names, so the rules didn't apply for any other svgs than themself.

Then we implemented the design and layout with HTML and CSS, stating with implementing the 375px screen and later the larger screen. 
Some elements change in size, were it's natrual, others have the same sizes.
The positioning might not 100% similar to the poster, but is mostly the same. It's only small differences that does not take away the meaning of the poster

#### Background

Utilized background image inn css to implement the background. We extracted the elements in illustrator and exported a svg file. This was the only way we got the background to work and be responsive. I added the background image to the css like this:

background-image: url(/assets/img/background.svg);

background-repeat: no-repeat;

background-position: center;

background-size: 600px;

#### Animations

All the animations are inspired by Lefties lecture about svg files, specific page 54- 68. We wanted the animations to feel natural and be coherent with the design. Therefore, we animated the extracted svg elements with their normal state (in the real world) in mind.

Stars: have a Smil animation that transform them to rotate, this is done to simulate the flickering night sky with blinking and shifting stars. I also added a keyframe animation in css to animate the opacity. Together this makes them rotate and flicker, which we thought mimics a shining star in the sky.

Moon: Here we added a Smil path animation to make the moon resemble rise and set. This path was made using a vertical path.

Car: We wanted the car to feel like it floats in space. To act like it was taking off in zero gravity we added a path animations using Smil and made a curving path for the car to float and added «repeatCount=indefinite» to make it go on forever.

Green figures: Because all the other animations were at the top of the poster, we wanted to even it out and make some of the bottom elements more interesting. Therefore, we added a @keyframe animation to css and made the green figures shake slightly. The figures resemble co2 clouds with angry faces and the shaking just made it even more clear that they are angry and not friendly. We think the animation succeeds to clarifying the message.

The animations make the poster feel more alive and interesting. We think the animations contributes to emphasize the message.
