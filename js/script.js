function changeImage(a) {
    document.getElementById("img").src=a;
    document.getElementById("mainImageDisplay").style.display="block";
    document.getElementById("mainVideoDisplay").style.display="none";
    document.getElementById("video").src=a;
    document.getElementById("lbImage").href=a;
    
        }
function changeVideo(a) {
    document.getElementById("video").src=a;
    document.getElementById("mainVideoDisplay").style.display="block";
    document.getElementById("mainImageDisplay").style.display="none";
        }
function changeAlt(a) {
    document.getElementById("img").alt=a;
}

function changeTextCity(){
document.getElementById("outputD").innerHTML = "This piece is a 3-point perspective city I made. It was a drawing assignment in my Computer Animation and Web Design class. It was the final assignment in our mini unit about perspective. In the previous weeks, my class had learned about 1-point and 2-point perspective, and I was very excited to learn about 3-point perspective. I ended up really liking the piece I made. I thought the use of 3-point perspective helped to make the buildings look interesting and like they're towering high up into the sky as the viewer looks down on them. It was drawn traditionally using pencils on January 16th, 2022.";
document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
document.getElementById("outputN").innerHTML ="3-Point Perspective City";
document.getElementById("lbImage").title= "3-Point Perspective Buildings";
}
function changeTextDragon(){
    document.getElementById("outputD").innerHTML = "Dragon Kidnapping was a one-page comic I made in order to work on improving my paneling and composition skills for storytelling. I tried to make it so the panels flow well together in the proper order and in a way that enhances the short story being told. I was trying to make it so there was a lot of build up to make the subversion at the end hit properly. It was drawn on September 12th, 2022";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Dragon Kidnapping";
    document.getElementById("lbImage").title= "Dragon Kidnapping";
    document.getElementsByClassName("lb-caption").innerHTML= "Dragon Kidnapping";
    }

function changeTextRobo(){
    document.getElementById("outputD").innerHTML = "RoboMiner is a small game I made in about 3 weeks for an assignment when I was in tech school. It was made in Unity, and all sprites were drawn by me in Piskel. It was a good experience in learning more about pixel art. It was completed June 7th, 2023. Link to play: https://simmer.io/@Generic_User/robominer";
        document.getElementById("outputD2").innerHTML = "";
    document.getElementById("outputD3").innerHTML = "";
    document.getElementById("outputD4").innerHTML = "";
    document.getElementById("outputD5").innerHTML = "";
        document.getElementById("outputN").innerHTML ="RoboMiner";
        document.getElementById("lbImage").title= "RoboMiner";
        document.getElementsByClassName("lb-caption").innerHTML= "RoboMiner";
        }
function changeTextVamp(){
    document.getElementById("outputD").innerHTML = "These are some assets I made for a classmate in that previously mentioned tech school program who was looking to do a low-poly vampire game for their assignment. It was a good learning experience for working off the design requests and feedback of another person to create a product they’re happy with. All of the modeling and texturing was done in Blender. Completed May 14th, 2023";
        document.getElementById("outputD2").innerHTML = "";
    document.getElementById("outputD3").innerHTML = "";
    document.getElementById("outputD4").innerHTML = "";
    document.getElementById("outputD5").innerHTML = "";
        document.getElementById("outputN").innerHTML ="Vampire Game Models";
        document.getElementById("lbImage").title= "VampireGameModels";
        document.getElementsByClassName("lb-caption").innerHTML= "VampireGameModels";
                }
function changeTextCrab2(){
    document.getElementById("outputD").innerHTML = "This is a character I modeled in my Advanced 3D Modeling class last semester. It was created off of concept art by Jae Park, which can be found here: https://cara.app/post/7f8674c4-d57a-47fb-8d24-018e5f163417";
        document.getElementById("outputD2").innerHTML = "It was a valuable experience in working off of the concept art of another person. It was modeled in Zbrush, retopologized in Maya, textured in Adobe Substance Painter, and rendered in Unreal Engine. Completed December 17th, 2024.";
    document.getElementById("outputD3").innerHTML = "";
    document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Bipedal Crustacean Model";
    document.getElementById("lbImage").title= "BipedalCrustaceanModel";
    document.getElementsByClassName("lb-caption").innerHTML= "BipedalCrustaceanModel";
                                }
function changeTextWalk(){
    document.getElementById("outputD").innerHTML = "This is a basic walk cycle I put together last semester. It was made using the Ultimate Bony character rig provided to me by Jesse O’Brien, and the original creator of it seems to be Ugur Ulvi Yetiskin (https://www.highend3d.com/maya/downloads/character-rigs/c/ultimate-bony-for-maya). This piece acts as a good example of my ability to do standard animations in Maya.";
    document.getElementById("outputD2").innerHTML = "";
    document.getElementById("outputD3").innerHTML = "";
    document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Maya Walk Cycle";
        }
function changeTextFish(){
document.getElementById("outputD").innerHTML = "One of my projects that I’m most proud of is an ocean animation I made in my Computer Animation and Web Design class at the Center for Technology, Essex, in 2022 called Swordfish’s Duel. It was a two week long project to practice storytelling and animation using the ocean as the setting and using aquatic creatures as characters. My animation ended up being about two fish battling cyborg fish and a sea bunny in order to free some crabs.";
document.getElementById("outputD2").innerHTML = "Before this project actually began, everyone in my class modeled and rigged a fish along with modeling 3 coral assets. Then, everyone’s fish and coral models were copied to a shared Google Drive folder so we could all use each other's assets. After picking out assets to use, I drew out the storyboard for the animation. Then, I started setting up the scene and environment in Blender. From there, I started actually animating it all. When the animation was done, I rendered it out and started editing in Adobe Premiere Pro. Most of the editing was working on sound design using sound effects from freesound.org. Once that was all done, I exported the video and submitted the assignment.";
document.getElementById("outputD3").innerHTML = "I was able to learn a lot about animation and the process of creating 3D animation through this assignment. Before it, I had little knowledge of rigging and weight painting. Working on it also greatly improved my animation and cinematography skills at the time. It was certainly one of the most formative assignments for my skills as an animator from my first year of learning.";
document.getElementById("outputD4").innerHTML = "I’m very proud of this project because I think it showcases some of my best work. It demonstrated my skills with 3D modeling, 3D animation, storyboarding, cinematography, short animation writing, and sound editing. Also, it acts as a self-contained project. Whenever I’ve presented the animation in a portfolio review, the reviewer was able to understand it and the plot going on with few questions since they got to see it play out from beginning to end as one thing.";
document.getElementById("outputD5").innerHTML = "In the end, I think the project turned out great. If I were to go back and fix one thing about it, I would fix a small weight painting error that shows up in the beginning of the animation. Other than that, I think the project still holds up well today and it was an amazing learning experience for me.";
document.getElementById("outputN").innerHTML ="Reef Animation";
}

function changeTextMWD(){
    document.getElementById("outputD").innerHTML = "This is one drawing from a series of Mother Ducking Witch pieces I've made. They were originally inspired by inside jokes from some of my friends relating to how I avoid swearing. I played into those jokes by continuing to censor myself in even wackier and comedic ways. One of those censors was Mother Ducking Witch, and I realized that it could be a fun character to draw. Which is what made me first draw a piece about a witch duck and her duckling. This specific piece was my 5th Mother Ducking Witch drawing, and my personal favorite. The drawing was made in Medibang on July 16th, 2021.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Mother Ducking Witch";
    }

    function changeTextCrab(){
        document.getElementById("outputD").innerHTML = "An animated meme I made using the song Crab Rave by Noisestorm. The grave and skeleton hand was actually from a previous animation I made in order to practice hand animation. All of the modeling, rigging, and animating was done by me, completed on December 12th, 2021. ";
        document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
        document.getElementById("outputN").innerHTML ="Crab Grave";
        }
function changeTextBoxing(){
    document.getElementById("outputD").innerHTML = "Match of the Century was a comic page I made with a specific goal in mind. I wanted to try and make a comic that was able to tell a story without using a single line of dialogue. I did this since it would force me to focus on the expressions and poses of the characters along with the layout and composition in order to deliver a story. I did use some text for sound effects and the victory announcement at the end, but those are just there to enhance the art in the panels rather than the main method of storytelling. Overall, I think the piece turned out well and definitely helped to improve my storytelling. It was completed on October 30th, 2022, in Krita.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Match of the Century";
    }
function changeTextSoda(){
    document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputD").innerHTML = "This work sample is a still life drawing I did of Pepsi and Coke bottles fighting. This was a project I did on my own in order to strengthen my college portfolio. It had been recommended to me during portfolio reviews that I should add more still life drawings made from direct observation and that I should have more variety in the media that I work with.  Making this still life piece using colored pencils helped with that. I was mainly inspired by the cases of Pepsi and Coke in my house and I thought a sort of brand war between them would make for a funny piece.";
document.getElementById("outputD2").innerHTML = "The procedure to make it started with putting together the actual reference. I arranged the various bottles and taped plastic forks and knives where they needed to be. From there, I started lightly sketching out the shapes of all the objects. Once that was done, I colored and shaded all of the objects. It ended up coming out quite well with no major revisions needed.";
document.getElementById("outputD3").innerHTML = "I really like this piece, it was one I put a lot of effort into. It’s a good example of my ability to work off of direct observation and my ability to work with physical media. It also helped me further develop my skills with colored pencils greatly. Overall, one of my favorite pieces. The only thing I’d really change about it is making the line direction more consistent in order to make some sections (especially the box) look less scribbly.";
document.getElementById("outputD4").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Soda War";
    }
function changeTextKirby(){
    document.getElementById("outputD").innerHTML = "For my Computer Animation and Web Design class, we had an assignment where we had to learn about a new aspect of Blender on our own. One of the options was learning about 2D animating in Blender, so I decided to do that. I chose to have it be about Kirby since he has a simple, easy to animate character design that would let me get a decent amount of animation done in the limitted time I had. It was completed on January 26th, 2022.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Kirby Animation";
    }
function changeTextCow(){
    document.getElementById("outputD").innerHTML = "This was a picture I took of some cows from a local farm. It was done for a Vermont themed photography assignment and I figured that cows would be the perfect subjects for one of them.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Cow Collective";
    }
function changeTextZero(){
    document.getElementById("outputD").innerHTML = "A modeling timelapse I did of Zero from the Mega Man Zero series. The footage had to be extremely sped up for the timelapse since my teacher wanted timelapses to be around a minute and a half. However, I had about 15 hours of footage, so it became a bit hard to follow in the final video.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Zero Modeling Timelapse";
    }
function changeTextBear(){
    document.getElementById("outputD").innerHTML = "In 2022, a teammate and I participated in the SkillsUSA 3D Visualization and Animation competition at the state level and won. Winning that competition qualified us to compete in the upcoming national competition. This animation was our submission to that competition.";
    document.getElementById("outputD2").innerHTML = "The rules of the competition were that my teammate and I had 8 hours to complete an animation based off of the prompt “a car hitting a teddy bear”. All assets and designs had to be made completely from scratch other than the few assets that already existed by default in the programs they allowed.";
document.getElementById("outputD3").innerHTML = "After my teammate and I received this year's prompt, we then brainstormed some ideas about how we wanted to go about it in order to fit the 8 hours of work time limit. We worked on a storyboard using paper and pencil in order to get an idea of what it would look like and to figure out what assets we needed. Then we each started work on modeling and rigging those assets in Blender and texturing them in Adobe Substance 3D Painter. After that was done, we each chose a half of the storyboard to animate. When each of us were done animating and refining our parts, we rendered them and put them together in Adobe Premiere Pro.";
document.getElementById("outputD4").innerHTML = "This animation ended up getting us 4th place which is part of the reason why I’m so proud of it. It represents a pretty big achievement of mine relating to my industry. It shows that I’m able to work with others on projects, along with showing my ability to work under time constraints. It also shows my artistic skill with 3D modeling, animating, and texturing.";
document.getElementById("outputD5").innerHTML = "Overall, I think the animation turned out really well. However, if I were to change something about it, I would probably adjust the camera work in my section. Given my experience now, I could make it all flow better than it did back then.";
    document.getElementById("outputN").innerHTML ="2022 SkillsUSA 3D Visualization and Animation Nationals Submission";
    }
function changeTextTrees(){
    document.getElementById("outputD").innerHTML = "Another photo I took for my Vermont photography assignment. This one was meant to have more of a focus on Vermont foliage. I liked how the vibrant orange leaves leads the viewer's eyes down the path.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Path of Orange";
}
