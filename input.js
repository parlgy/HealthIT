
//An event listener for submission
document.getElementById('form_input').addEventListener('submit', submitForm);
// we declare the parameters we are getting from the input form as global
var region;
var region_name;
function submitForm(e)
{
    e.preventDefault();
    region = document.getElementById('region').value;
    region_name = document.getElementById('region_name').value;
    document.getElementById("my_button").disabled = true;
    getData();
}

            var level1 = 0;
            var level2 = 0;
            var level3 = 0;
            var level4 = 0;
            var level5 = 0;

        async function getData(){
            const response = await fetch('Facility.csv');
            const data = await response.text();
            // console.log(data);

           
            const rows = data.split('\n').slice(1);
            rows.forEach(elt => {
                const row = elt.split(',')
                const Code = row[0];
                // xlabels.push(Code);
                const Name = row[1];
                const Keph_level = row[4];
                const County = row[12];
                
                const Sub_county = row[14];
                const Ward = row[15];

                //console.log(Sub_county, Keph_level);

                if(region == 'county'){
                    if(County == region_name){
                    if(Keph_level == 'Level 1'){
                        level1 = level1 + 1 ;
                    }
                    else if(Keph_level == 'Level 2'){
                        level2 = level2 + 1 ;
                    }
                     else if(Keph_level == 'Level 3'){
                        level3 = level3 + 1 ;
                    }
                     else if(Keph_level == 'Level 4'){
                        level4 = level4 + 1 ;
                    }
                     else{
                        level5 = level5 + 1 ;
                    }
                }

                }
                else if(region == 'sub_county'){
                    if(Sub_county == region_name){
                    if(Keph_level == 'Level 1'){
                        level1 = level1 + 1 ;
                    }
                    else if(Keph_level == 'Level 2'){
                        level2 = level2 + 1 ;
                    }
                     else if(Keph_level == 'Level 3'){
                        level3 = level3 + 1 ;
                    }
                     else if(Keph_level == 'Level 4'){
                        level4 = level4 + 1 ;
                    }
                     else{
                        level5 = level5 + 1 ;
                    }
                }
                }
                else{
                    if(Ward == region_name){
                    if(Keph_level == 'Level 1'){
                        level1 = level1 + 1 ;
                    }
                    else if(Keph_level == 'Level 2'){
                        level2 = level2 + 1 ;
                    }
                     else if(Keph_level == 'Level 3'){
                        level3 = level3 + 1 ;
                    }
                     else if(Keph_level == 'Level 4'){
                        level4 = level4 + 1 ;
                    }
                     else{
                        level5 = level5 + 1 ;
                    }
                }
                }
            })
                        //console.log(level1,level2,level3,level4,level5);
        var title_name = region_name+"  "+region
                var y_axis_text = "Frequency of KPEH Levels in "+title_name
                var chartData = {
                type: 'bar',
                "title":{  
                    "text": title_name  
                    }, 
                    "scale-y":{  
                        label: { /* Scale Title */
                        text: y_axis_text,
                        },
                        values: "0:50:5"
                        },
                    "scale-x":{  
                        label: { /* Scale Title */
                        text: "KEPH Levels",
                        },
                        labels: ["level1", "level2 ", "level3","level4", "level5"]
                        },
                series: [
                    { 
                        values: [level1, level2, level3, level4, level5],
                        'background-color': "#6666FF"
                    },
                ]
                };
                zingchart.render({
                id: 'myChart',
                data: chartData,
                width: "80%"
                });
            
        }

