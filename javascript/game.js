  <!-- 
   //  Week 4 Homework Game 
  // Variables

      var testCarValue = "69";
      var panelsnumbersgeneratedTable = [];
      var panelsnumbersgeneratedTableIndex = 0;
      var panelNumberGenerated;
      var generatedTargetNumber;
      var gameCounter = 0;
      var wins = 0;
      var losses = 0;
      var div = $("<div></div>");
      

      var imagesTable = [ "assets/images/rollsroyce.jpg", "assets/images/ranchero.jpg",
                          "assets/images/gmcmotorhome.jpg", "assets/images/gremlin.jpg"];
      var imagesTableIndex;


      

      function initialize () {
        console.log("init");
        // Generate 4 Random Numbers Between 1 - 12 for the Panels //
         for (panelsnumbersgeneratedTableIndex =  0; panelsnumbersgeneratedTableIndex < 4; panelsnumbersgeneratedTableIndex ++)

             { panelNumberGenerated = Math.floor(Math.random() * 12 + 1);
               panelsnumbersgeneratedTable[panelsnumbersgeneratedTableIndex] = panelNumberGenerated;
               console.log(panelNumberGenerated);}
         console.log(panelsnumbersgeneratedTable);

         //Generate Random Target Number Between 19 - 120 //

         generatedTargetNumber = Math.floor(Math.random() * 102 + 19);
         console.log(generatedTargetNumber);
         $("#numberToGuess").text(generatedTargetNumber);

         // Create Buttons with Images and Values //

         for (panelsnumbersgeneratedTableIndex =  0; panelsnumbersgeneratedTableIndex < panelsnumbersgeneratedTable.length; panelsnumbersgeneratedTableIndex ++)
           { var imageCar = $("<img>").addClass("carImage").attr("src","" + imagesTable[panelsnumbersgeneratedTableIndex] + "").attr("data-carvalue",panelsnumbersgeneratedTable[panelsnumbersgeneratedTableIndex]);

             $("#cars").append(imageCar);
           }
         } 

         function writeCountersToPage () {

          $("#Wins").text(wins);
          $("#Losses").text(losses);
          $("#totalScoreNumber").text(gameCounter);
        }
                          
        

// ------------------Main Line Code ---------------------
          console.log("start");
         
          initialize ();

          console.log(div) 
          $(document).on("click",".carImage",function() {
          //$(".carImage").on("click",function() {

            console.log("main logic begin");

            var carValue = ($(this).data("carvalue"))

            console.log(carValue);

            gameCounter = gameCounter + carValue;
            console.log("gameCounter");
            console.log(gameCounter);

          

            if (gameCounter == generatedTargetNumber)
                
               { wins ++;
                 console.log("wins ");
                 console.log(wins);
                 $("#cars").empty();
                 gameCounter = 0;
                 writeCountersToPage ();
                 initialize (); }
            else
               {if (gameCounter > generatedTargetNumber)
                { losses ++;
                  console.log("losses ");
                 console.log(losses);
                 $("#cars").empty();
                 gameCounter = 0;
                 writeCountersToPage ();
                 initialize (); };

                }
              
           
           // $('#onecar').attr('data-carvalue1', '59');
           // $("#onecar").append .attr(data-carvalue1 , "59");
            // var test =  ($("#onecar").data("carvalue1"))
           // console.log(test)
           // test1 = test + 1
           // console.log(test1)
           // var test2 = "80";
            // $('#onecar').attr('data-carvalue1', test2);
             // var test3 =  ($("#onecar").data("carvalue1"))
           // console.log(test3)
           // test4 = test + 1
           // console.log(test4)
           $("#totalScoreNumber").text(gameCounter);
           console.log(" UUU 22222222");
           // $("#cars").remove();
           // $('body').prepend(div)
                 // $("#cars").empty();
                 // initialize ();
            console.log(" UUU 33333333");      
         })
          
        console.log(" UUUUUUUUUUUUU"); 


         -->
         

       