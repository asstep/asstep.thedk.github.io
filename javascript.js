
  		function addRow(id){
        var grupa = document.getElementById("grup").value;

  		  if (document.getElementById("gend").value  == "Муж.") {
        }
        else if  (document.getElementById("gend").value  == "Жен.") {
        }
        else {
          alert("Выберет пол: Муж. или Жен.")
          return;
        }

        if (grupa != "Царь" ||  "Воин") {
          alert("Выберите группу пользователя
            ,")
        }
        else {
          alert("Выберет пол: Муж. или Жен.")
          return;
        }

    		var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
    		var row = document.createElement("TR")
    		var td1 = document.createElement("TD")
    			td1.appendChild(document.createTextNode(login.value))
    		var td2 = document.createElement("TD")
    			td2.appendChild(document.createTextNode(names.value))
    		var td3 = document.createElement("TD")
    			td3.appendChild(document.createTextNode(gend.value))
    		var td4 = document.createElement("TD")
    			td4.appendChild(document.createTextNode(grup.value))
    		var td5 = document.createElement("TD")
    			td5.appendChild(document.createTextNode(date.value))
    		var td6 = document.createElement("TD")
    			td6.appendChild(document.createTextNode(point.value))
    		row.appendChild(td1);
    		row.appendChild(td2);
    		row.appendChild(td3);
    		row.appendChild(td4);
    		row.appendChild(td5);
    		row.appendChild(td6);
    		tbody.appendChild(row);

        // document.write(document.getElementById("login").value);

      }