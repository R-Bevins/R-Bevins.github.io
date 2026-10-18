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
document.getElementById("outputD").innerHTML = "A page I drew to practic action paneling and framing. Reads right to left. Drawn in Clip Studio Paint.";
document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
document.getElementById("outputN").innerHTML ="Right to Left - Action Page";
document.getElementById("lbImage").title= "my drawing of an action manga page";
}
function changeTextDragon(){
    document.getElementById("outputD").innerHTML = "Dragon Kidnapping is an older comic I drew to practice a more vertical comic format. Reads left to right. Drawn in Krita.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Left to Right - Dragon Kidnapping";
    document.getElementById("lbImage").title= "Dragon Kidnapping";
    document.getElementsByClassName("lb-caption").innerHTML= "Dragon Kidnapping";
    }
function changeTextSoda(){
    document.getElementById("outputD").innerHTML = "A one page adaptation of one of my yonkomas. This is the second draft of it, having implemented feedback to redo the bottom right panel. Reads right to left. Traditionally drawn.";
        document.getElementById("outputD2").innerHTML = "";
    document.getElementById("outputD3").innerHTML = "";
    document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Right to Left - Monster Under the Bed";
    document.getElementById("lbImage").title= "A one page story about a girl taming the monster under her bed.";
    document.getElementsByClassName("lb-caption").innerHTML= "A one page story about a girl taming the monster under her bed.";
                                }
function changeTextClock(){
document.getElementById("outputD").innerHTML = "This double page spread is an adaptation of a piece I wrote for one of my creative writing classes. Reads right to left. Drawn in Clip Studio Paint.";
document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
document.getElementById("outputN").innerHTML ="Right to Left - Boy and Skeleton";
document.getElementById("lbImage").title= "A double page spread comic about a boy and a skeleton";
}

function changeTextMWD(){
    document.getElementById("outputD").innerHTML = "This is an older drawing of mine from a series of Mother Ducking Witch pieces I've made. They were originally inspired by inside jokes from some of my friends relating to how I avoid swearing. Drawn in Medibang.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Mother Ducking Witch";
    document.getElementById("lbImage").title= "A mother duck and her duckling making a potion together.";
    }

    function changeTextEthic(){
        document.getElementById("outputD").innerHTML = "A 3-point perspective piece I made for my Drawing for Animation class taught by Vanessa Sweet.The prompt was to draw your childhood bedroom from memory. Drawn traditionally.";
        document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
        document.getElementById("outputN").innerHTML ="3 Point Perspective - My Childhood Bedroom from Memory";
         document.getElementById("lbImage").title= "My childhood bedroom from memory.";
        }
function changeTextBoxing(){
    document.getElementById("outputD").innerHTML = "A page from my final comic I drew for my Visual Storytelling for the Graphic Novel class, taught by Dave Chisholm. The initial prompt  given was to adapt another piece of media, so I drew the martial arts match between Michael and Dwight in The Office, but went back and forth between it being a heightened, more intense match from their perspectives, then switching to a more flat and cartoony style after to show how unserious it looks to the rest of the office. This page is the former. Reads right to left. Drawn in Krita.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Left to Right - Fight";
     document.getElementById("lbImage").title= "Comic of two guys fighting";
    }

function changeTextInktober(){
    document.getElementById("outputD").innerHTML = "The final page from my midterm submission for Dave Chisholm's Visual Storytelling for the Graphic Novel class. This is an edited version, implementing some of the feedback I had received from him around screentone implementation. Reads left to right. Made in Krita.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Left to Right - Hocus Bogus";
     document.getElementById("lbImage").title= "a comic about a magican fooling wizards";
    }
function changeTextSticky(){
    document.getElementById("outputD").innerHTML = "An exercise I did to practice drawing from imagination. I used some markers to put random color blots on the page, and then drew on top of them inspired by the colors and the shapes provided by each blot without using any reference. It was a very fun piece to make. Drawn traditionally.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Drawings from Imagination";
    document.getElementById("lbImage").title= "A bunch of doodles drawn to various colors.";
    }
function changeTextFruit(){
    document.getElementById("outputD").innerHTML = "A bowl of fruit and a potato drawn from observation in pencil.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Bowl of Fruit + Potato";
       document.getElementById("lbImage").title= "a drawing of a bowl of fruit + a potato";
    }
function changeTextCat(){
    document.getElementById("outputD").innerHTML = "A collection of my yonkomas. Drawn traditionally.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="My Yonkomas";
    document.getElementById("lbImage").title= "a collection of yonkomas I drew";
    }
function changeTextCorner(){
    document.getElementById("outputD").innerHTML = "A one page, self contained story I drew about a snail and a hare racing. It's the first comic I drew in Krita. Reads right to left.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Right to Left - Hare vs Snail";
    document.getElementById("lbImage").title= "a hare racing a snail";
}
function changeTextRobo(){
    document.getElementById("outputD").innerHTML = "RoboMiner is a small game I made in about 3 weeks for an assignment when I was in tech school. It was made in Unity, and all sprites were drawn by me in Piskel. It was a good experience in learning more about pixel art. It was completed June 7th, 2023.";
        document.getElementById("outputD2").innerHTML = "<a href=https://simmer.io/@Generic_User/robominer>Game Link</a>";
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
function changeTextCrabMan(){
    document.getElementById("outputD").innerHTML = "This is a character I modeled in my Advanced 3D Modeling class last semester. It was created off of concept art by Jae Park (linked below)";
        document.getElementById("outputD2").innerHTML = "It was a valuable experience in working off of the concept art of another person. It was modeled in Zbrush, retopologized in Maya, textured in Adobe Substance Painter, and rendered in Unreal Engine. Completed December 17th, 2024.";
    document.getElementById("outputD3").innerHTML = "<a href=https://cara.app/post/7f8674c4-d57a-47fb-8d24-018e5f163417>Jae Park Link</a>";
    document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Bipedal Crustacean Model";
    document.getElementById("lbImage").title= "BipedalCrustaceanModel";
    document.getElementsByClassName("lb-caption").innerHTML= "BipedalCrustaceanModel";
                                }
function changeTextWalking(){
    document.getElementById("outputD").innerHTML = "This is a basic walk cycle I put together last semester. It was made using the Ultimate Bony character rig provided to me by Jesse O’Brien, and the original creator of it seems to be Ugur Ulvi Yetiskin (linked below). This piece acts as a good example of my ability to do standard animations in Maya.";
    document.getElementById("outputD2").innerHTML = "<a href=https://www.highend3d.com/maya/downloads/character-rigs/c/ultimate-bony-for-maya>Yetiskin Link</a>";
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
function changeTextCrab(){
        document.getElementById("outputD").innerHTML = "An animated meme I made using the song Crab Rave by Noisestorm. The grave and skeleton hand was actually from a previous animation I made in order to practice hand animation. All of the modeling, rigging, and animating was done by me, completed on December 12th, 2021. ";
        document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
        document.getElementById("outputN").innerHTML ="Crab Grave";
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
    document.getElementById("outputD").innerHTML = "My 2025 demo reel. Completed December 2, 2025. It contains snippets of various projects on this site in full, such as Meat  Cute, Crab Grave, and Dialogue Practice.";
    document.getElementById("outputD2").innerHTML = "";
document.getElementById("outputD3").innerHTML = "";
document.getElementById("outputD4").innerHTML = "";
document.getElementById("outputD5").innerHTML = "";
    document.getElementById("outputN").innerHTML ="Demo Reel";
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



