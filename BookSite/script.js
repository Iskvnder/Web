function change(element) {

    var a = element.getAttribute('id');

    switch(a) {
        case "Fairy_Tales":
            document.getElementById("img").src = "FairyTale.jpg" ;
            document.getElementById("h1").innerHTML = "Fairy Tales";
            document.getElementById("p1").innerText = "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.” ― Neil Gaiman";
            document.getElementById("p2").innerText = "A fairy tale, fairytale, wonder tale, magic tale, or Märchen is an instance of a folklore genre that takes the form of a short story. Such stories typically feature entities such as dwarfs, dragons, elves, fairies, giants, gnomes, goblins, griffins, mermaids, talking animals, trolls, unicorns, or witches, and usually magic or enchantments. In most cultures, there is no clear line separating myth from folk or fairy tale; all these together form the literature of preliterate societies.[1] Fairy tales may be distinguished from other folk narratives such as legends (which generally involve belief in the veracity of the events described)[2] and explicit moral tales, including beast fables. In less technical contexts, the term is also used to describe something blessed with unusual happiness, as in fairy-tale ending (a happy ending)[3] or fairy-tale romance. Colloquially, the term fairy tale or fairy story can also mean any far-fetched story or tall tale."
            break;
        case "Comics":
            document.getElementById("img").src = "comicspicture.jpg";
            document.getElementById("h1").innerHTML = "Comics";
            document.getElementById("p1").innerText = "“I don't remember when exactly I read my first comic book, but I do remember exactly how liberated and subversive I felt as a result.”― Edward Said, Palestine";
            document.getElementById("p2").innerText = "Comics is a medium that expresses narratives or other ideas using a series of still images, usually combined with text. It typically takes the form of a sequence of panels of images. Textual devices such as speech balloons, captions, and onomatopoeia can indicate dialogue, narration, sound effects, or other information. The size and arrangement of panels contribute to narrative pacing. Cartooning and other forms of illustration are the most common image-making means in comics; fumetti is a form which uses photographic images. Common forms include gag-a-day comic strips, editorial and gag cartoons, and comic books. Since the late 20th century, bound volumes such as graphic novels, comic albums, and tankōbon have become increasingly common, while online webcomics have proliferated in the 21st century.";
            break;
        case "Popular_Science":
            document.getElementById("img").src = "PopularScience.jpg";
            document.getElementById("h1").innerHTML = "Popular Science";
            document.getElementById("p1").innerText = "";
            document.getElementById("p2").innerText = "Popular science (also called pop-science or popsci) is an interpretation of science intended for a general audience. While science journalism focuses on recent scientific developments, popular science is more broad-ranging. It may be written by professional science journalists or by scientists themselves. It is presented in many forms, including books, film and television documentaries, magazine articles, and web pages. Popular science literature can be written by non-scientists who may have a limited understanding of the subject they are interpreting and it can be difficult for non-experts to identify misleading popular science, which may also blur the boundaries between real science and pseudoscience. However, sometimes non-scientists with a fair scientific background and strong technical communication skills can make good popular science writers because of their ability to put themselves in the layperson's place more easily.";
            break;
        case "Authors":
            document.getElementById("img").src = "Author.jpg";
            document.getElementById("h1").innerHTML = "Authors";
            document.getElementById("p1").innerText = "";
            document.getElementById("p2").innerText = "A writer is a person who uses written words in different styles and techniques to communicate ideas. Writers produce different forms of literary art and creative writing such as novels, short stories, books, poetry, plays, screenplays, teleplays, songs, and essays as well as other reports and news articles that may be of interest to the public. Writers' texts are published across a range of media. Skilled writers who are able to use language to express ideas well, often contribute significantly to the cultural content of a society The term writer is also used elsewhere in the arts and music – such as songwriter or a screenwriter – but as a standalone writer normally refers to the creation of written language. Some writers work from an oral tradition.";
    }

}

function big(element) {
    element.style.fontSize = "35px";
}

function small(element) {
    element.style.fontSize = "30px";
}