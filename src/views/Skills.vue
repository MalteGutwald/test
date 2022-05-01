<script src="https://kit.fontawesome.com/f1dd8dcc5e.js" crossorigin="anonymous"></script>

<template>
  <div>
    <div class="about">
      <h3 class="center">Meine Fähigkeiten und Qualifikationen:</h3>

      <p class="padding">Ich habe den Bachelor Studiengang Naturwissenschaftliche Informatik an der Universität Bielefeld im Jahr 2022 abgeschlossen 
        <a href="https://drive.google.com/file/d/11UnfVTxFSIRATEOoEvsqa5UQ0x2Coe1Y/view?usp=sharing">(Bachelorzeugnis PDF)</a>. In dieser Zeit lernte
         ich einiges über Softwareentwicklung mit einem zusätzlich ergänzenden, naturwissenschaftlichem Anteil. Die folgenden Bestandteile meines Studiums
          möchte ich dabei hervorheben:<br><br> 
      </p>
        <ul>
        <li><p v-on:click='show1()'>
          <img width=22px id="img1.1" style="display: none" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7d-2Oulao9Rx8CyZ46iqMlWExxW1xw7XKSw&usqp=CAU">
          <img width=13px id="img1.2" style="display: inline" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKD_Ct9TIwNc_3-OUXLGXqcT0XUKkngIZZSKQZtvKLY6U2_-m0WgZAFuwomm7tcbX3oQ&usqp=CAU">
            Online Annotationstool in <a href="https://biigle.de/">Biigle</a> (Grip): read more</p>
  
        <div id="myDIV1" style="display: none">
          <p>
            Im Vorfeld meiner Arbeit wurde schon vieles von den Entwicklern des Oberprojekts Biigle 2.0 geschaffen. Dabei handelt es sich um ein Online-Tool, 
            dessen Fokus speziell auf der Annotation von Meeresbildern liegt.<br><br>In diesem Projekt erweiterte ich Biigle um eine weitere Anwendung. Diese Anwendung
            wurde Biigle-Grip benannt. Der Name Grip setzt sich dabei aus <strong>Gri</strong>d <strong>P</strong>atch-Annotation zusammen. Der Mittelpunkt 
            dieser Arbeit konzentrierte sich darauf Teilbilder spezifischer Größe, zusammen mit einem Label, abzuspeichern. Dies soll der Klassizierung von
            Interessensobjekten dienen. Ein Grip-Captcha soll aus einer beliebigen Anzahl von
            Bildausschnitten bestehen, die dem Nutzer in einem Rechteck angeordnet angezeigt werden sollen. 
            Der Nutzer hat die Möglichkeit die Art der Darstellung zu verändern. Je nach Usecase wählt er, ob die Teilbilder in Prozent oder Pixeln und die Anzahl der Bilder in Reihe und Spalte aus.
            Nachdem das Raster erstellt wurde, hat der Nutzer die Möglichkeit über wenige Klicks Teilbilder zusammen mit einem Label abzuspeichern. 
            Im Vergleich zu anderen Herangehensweisen um Objekte auf ihren Origninalbildern zu markieren, wie dem pixelgenauen Markieren über ein Polygonnetz, soll dieser Prozess mit
            dem Grip-Tool besonders schnell ablaufen. Somit wird Genauigkeit der Annotation gegen Geschwindigkeit eingetauscht.
            <br> Ich sollte mich mit Pathologiebildern beschäftigen. Ziel war es Trainingsbilder für Künstliche Intelligenzen zu erstellen.
          </p>

          
          <div>
          <!-- Diashow-->
            <div class="img">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <!-- Text slides with image -->
                
                <b-carousel-slide img-src="https://i.imgur.com/KfW4uzT.png">
                  <h4>Beispiel Nutzereinstellung 1</h4>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://i.imgur.com/KIzcUda.png">
                  <h4>Beispiel Nutzereinstellung 2</h4>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://i.imgur.com/0RkW5tr.png">
                  <h4>Beispiel Nutzereinstellung 3</h4>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://i.imgur.com/jAyQ5cZ.png">
                  <h4>Label setzen</h4>
                </b-carousel-slide>
                <b-carousel-slide img-src="https://i.imgur.com/9iAjAGn.png">
                  <h4>Abgespeicherte Bilder mit Labeln ansehen</h4>
                </b-carousel-slide>

                
              </b-carousel>
            </div>
            <!-- Diashow Ende-->
          </div>
        </div>
        </li>

        <li> <p v-on:click='show2()'>
          <img width=22px id="img2.1" style="display: none" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7d-2Oulao9Rx8CyZ46iqMlWExxW1xw7XKSw&usqp=CAU">
          <img width=13px id="img2.2" style="display: inline" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKD_Ct9TIwNc_3-OUXLGXqcT0XUKkngIZZSKQZtvKLY6U2_-m0WgZAFuwomm7tcbX3oQ&usqp=CAU">
            Online Signatur Anwendung Elsa:</p>
          <div id="myDIV2" style="display: none">
            <p>
              Aufgabe dieser Projektarbeit war es, für die deutsche Telekom in einer Gruppe von sieben Studierenden eine Online-Anwendung zu entwickeln, 
              mit der mehrere Personen unkompliziert und schnell Dokumente über das Internet unterschreiben können sollen. Dabei wurde uns nur eine grobe
               Vorstellung vorgegeben, die Planung und genauere Umsetzung lag dabei in unseren Händen. Dies sollte unsere Kreativität anregen. Es fanden
                Kundengespräche statt, in denen unsere Vorstellungen und Fragen abgesprochen wurden, um ein möglichst zufriedenstellendes Ergebnis liefern zu können.
              Während dieser Projektarbeit war Teamarbeit, eine gute Kommunikation und Dokumentation sehr wichtig. Wir setzten dabei die Scrum Methode ein.
            </p>
            <a href="https://drive.google.com/file/d/12sBbBDPBbgW-p0qrpVKA4QBEpGmCw3IM/view">Elsa PDF</a>
          
          </div>
        </li>

        <li> <p v-on:click='show3()'>
          <img width=22px id="img3.1" style="display: none" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7d-2Oulao9Rx8CyZ46iqMlWExxW1xw7XKSw&usqp=CAU">
          <img width=13px id="img3.2" style="display: inline" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKD_Ct9TIwNc_3-OUXLGXqcT0XUKkngIZZSKQZtvKLY6U2_-m0WgZAFuwomm7tcbX3oQ&usqp=CAU">
            Sonstiges:</p>
          <div id="myDIV3" style="display: none">
           <b>Sprachen<br></b>
            <span>Deutsch (Muttersprache)<br></span>
            <span>Englisch (fließend)<br><br></span>
           <b>Webentwicklung<br></b>
           <span>Java, Java Spring, XML, HTML/JavaScript/CSS, Vue, Bootstrap, Docker, PHP, 
            MySQL, REST-API, Git, Maven und Jenkins<br><br>
           </span>

           <b>Fähigkeiten<br></b>
            <span>LaTeX, GNU, Mathlab</span>
          </div>
        </li>
        <router-link to="/">Kontaktdaten</router-link> 
        </ul>
    </div>
    <Footer />
  </div>
  
</template>
<script>
import Footer from "./../components/Layout/Footer";

export default {
  components:{
    Footer
  },

  data(){
    return {
        sliding: null
      }
  },
  methods:{
    onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
    show1(){
      var x = document.getElementById("myDIV1");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
      var x = document.getElementById("img1.1");
      if (x.style.display == "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
      var x = document.getElementById("img1.2");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }

    },
    show2(){
      var x = document.getElementById("myDIV2");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
      var x = document.getElementById("img2.1");
      if (x.style.display == "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
      var x = document.getElementById("img2.2");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
    },
    show3(){
      var x = document.getElementById("myDIV3");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
      var x = document.getElementById("img3.1");
      if (x.style.display == "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
      var x = document.getElementById("img3.2");
      if (x.style.display === "none") {
        x.style.display = "inline";
      } else {
        x.style.display = "none";
      }
    }
  }, 
}
</script>

<style scoped>
    .img{
      margin: auto;
    }
    .none{
      display: inline;
    }
    .hidden{
      display: none;
    }
    .contact{
      padding-left: 5%;
      padding-right:5%;
      margin: 0%;
    }
    .center{
     text-align: center;
    }
    .padding{
      padding-top: 5%;
      padding-left: 5%;
      padding-right:5%;
      margin: 0%;
    }
    Footer{    
      font-weight: bold;
      font-weight: 600;
      text-align: left;
      padding-top: 1%;
      padding-left: 5%;
      padding-right:5%;

      position: fixed;
      bottom: 0;
    }
    ul{
      list-style-type: none;
      padding-left: 6%;
       padding-right: 6%;
    }
    li{
      font-size: 20px;
     
      border-top: solid black 1px;
      border-bottom: solid black 1px;;
    }
</style>
