<template>

<div>
  <h3 class="center">Über mich</h3>
  <div class="padding">
    <div>
      <p>
        Hi, mein Name ist Malte Gutwald, ich bin 25 Jahre alt und angehender Webentwickler. Ich bin August 2007 – Juni 2015 zum Helmholtz Gymnasium Bielefeld
        gegangen, wo ich mein Abitur gemacht habe. Oktober 2015 – März 2022 habe ich meinen Bachelor of Science an der Universität Bielefeld
        in dem Studiengang Naturwissenschaftliche Informatik gemacht. Aktuell bin ich auf der Suche nach einer langfristigen Stelle. 
        Ich hoffe ich kann Sie von meinen Fähigkeiten überzeugen. 
      </p>  
      <p>
        Während meines Studiums wurde ich mit der Entwicklung wesentlicher Software-Bestandteile vertraut
        gemacht. Ich bin versiert mit der Webentwicklung. Mehr dazu können Sie <router-link to="/skills">hier</router-link> finden. 
      </p>
      <p>Es bereitet mir Freude, meine technischen Fähigkeiten mit meiner Kommunikationsstärke zu verbinden
        und in einer Entwicklergruppe produktiv einzusetzen. In meinen bisherigen Projekten habe ich gelernt, wie
        wichtig die Rücksprache und Planung innerhalb des Teams ist, um termingenau gute Arbeit zu leisten. Ich
        bin mir sicher, dass ich mich mit meinem Fleiß und Engagement gut in Ihrem Unternehmen einbringen
        werde.
      </p>
      <p>
        Wie Sie mich erreichen: 
      </p>
      <b>Kontaktdaten<br></b>
      <span >
        0176 80651698<br>
      </span>
      <span>maltegutwald@web.de <br><br> </span>
      <b>Anschrift<br></b>
      <span >
        Malte Gutwald<br>
      </span>
      <span >
       Roggenkamp 18<br>
      </span>
      <span >
        33605 Bielefeld<br>
      </span>
      <span >
        Deutschland<br>
      </span>

      
  
        
      
  </div>
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
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
    .padding{
      padding-left: 5%;
      padding-right:5%;
      margin: 0%;
    }
    .center{
     text-align: center;
    } 
</style>