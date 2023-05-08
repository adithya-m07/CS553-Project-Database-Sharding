/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 411.0, "minX": 0.0, "maxY": 7478.0, "series": [{"data": [[0.0, 411.0], [0.1, 411.0], [0.2, 806.0], [0.3, 806.0], [0.4, 817.0], [0.5, 817.0], [0.6, 817.0], [0.7, 817.0], [0.8, 818.0], [0.9, 818.0], [1.0, 859.0], [1.1, 859.0], [1.2, 889.0], [1.3, 889.0], [1.4, 936.0], [1.5, 936.0], [1.6, 977.0], [1.7, 977.0], [1.8, 983.0], [1.9, 983.0], [2.0, 1022.0], [2.1, 1022.0], [2.2, 1132.0], [2.3, 1132.0], [2.4, 1164.0], [2.5, 1164.0], [2.6, 1166.0], [2.7, 1166.0], [2.8, 1166.0], [2.9, 1178.0], [3.0, 1178.0], [3.1, 1180.0], [3.2, 1180.0], [3.3, 1195.0], [3.4, 1195.0], [3.5, 1228.0], [3.6, 1228.0], [3.7, 1281.0], [3.8, 1281.0], [3.9, 1289.0], [4.0, 1289.0], [4.1, 1315.0], [4.2, 1315.0], [4.3, 1551.0], [4.4, 1551.0], [4.5, 1568.0], [4.6, 1568.0], [4.7, 1573.0], [4.8, 1573.0], [4.9, 1574.0], [5.0, 1574.0], [5.1, 1577.0], [5.2, 1577.0], [5.3, 1589.0], [5.4, 1589.0], [5.5, 1593.0], [5.6, 1593.0], [5.7, 1594.0], [5.8, 1594.0], [5.9, 1596.0], [6.0, 1596.0], [6.1, 1621.0], [6.2, 1621.0], [6.3, 2069.0], [6.4, 2069.0], [6.5, 2081.0], [6.6, 2081.0], [6.7, 2128.0], [6.8, 2128.0], [6.9, 2134.0], [7.0, 2134.0], [7.1, 2144.0], [7.2, 2144.0], [7.3, 2152.0], [7.4, 2152.0], [7.5, 2157.0], [7.6, 2157.0], [7.7, 2181.0], [7.8, 2181.0], [7.9, 2217.0], [8.0, 2217.0], [8.1, 2219.0], [8.2, 2219.0], [8.3, 2435.0], [8.4, 2435.0], [8.5, 2438.0], [8.6, 2438.0], [8.7, 2446.0], [8.8, 2452.0], [8.9, 2452.0], [9.0, 2472.0], [9.1, 2472.0], [9.2, 2515.0], [9.3, 2515.0], [9.4, 2525.0], [9.5, 2525.0], [9.6, 2538.0], [9.7, 2538.0], [9.8, 2572.0], [9.9, 2572.0], [10.0, 2582.0], [10.1, 2582.0], [10.2, 2932.0], [10.3, 2932.0], [10.4, 2945.0], [10.5, 2945.0], [10.6, 2975.0], [10.7, 2975.0], [10.8, 2981.0], [10.9, 2981.0], [11.0, 2986.0], [11.1, 2986.0], [11.2, 2987.0], [11.3, 2987.0], [11.4, 2990.0], [11.5, 2990.0], [11.6, 3021.0], [11.7, 3021.0], [11.8, 3059.0], [11.9, 3059.0], [12.0, 3070.0], [12.1, 3070.0], [12.2, 3323.0], [12.3, 3323.0], [12.4, 3341.0], [12.5, 3341.0], [12.6, 3360.0], [12.7, 3360.0], [12.8, 3368.0], [12.9, 3368.0], [13.0, 3407.0], [13.1, 3407.0], [13.2, 3448.0], [13.3, 3448.0], [13.4, 3476.0], [13.5, 3476.0], [13.6, 3486.0], [13.7, 3486.0], [13.8, 3517.0], [13.9, 3517.0], [14.0, 3567.0], [14.1, 3567.0], [14.2, 3684.0], [14.3, 3684.0], [14.4, 3694.0], [14.5, 3694.0], [14.6, 3706.0], [14.7, 3706.0], [14.8, 3709.0], [14.9, 3709.0], [15.0, 3727.0], [15.1, 3727.0], [15.2, 3728.0], [15.3, 3728.0], [15.4, 3738.0], [15.5, 3738.0], [15.6, 3757.0], [15.7, 3757.0], [15.8, 3762.0], [15.9, 3762.0], [16.0, 3779.0], [16.1, 3779.0], [16.2, 3869.0], [16.3, 3869.0], [16.4, 4176.0], [16.5, 4176.0], [16.6, 4182.0], [16.7, 4182.0], [16.8, 4221.0], [16.9, 4221.0], [17.0, 4235.0], [17.1, 4235.0], [17.2, 4246.0], [17.3, 4246.0], [17.4, 4253.0], [17.5, 4253.0], [17.6, 4255.0], [17.7, 4255.0], [17.8, 4261.0], [17.9, 4261.0], [18.0, 4277.0], [18.1, 4277.0], [18.2, 4281.0], [18.3, 4281.0], [18.4, 4283.0], [18.5, 4283.0], [18.6, 4291.0], [18.7, 4291.0], [18.8, 4294.0], [18.9, 4294.0], [19.0, 4296.0], [19.1, 4296.0], [19.2, 4317.0], [19.3, 4317.0], [19.4, 4323.0], [19.5, 4323.0], [19.6, 4331.0], [19.7, 4331.0], [19.8, 4336.0], [19.9, 4336.0], [20.0, 4339.0], [20.1, 4339.0], [20.2, 4374.0], [20.3, 4374.0], [20.4, 4377.0], [20.5, 4377.0], [20.6, 4416.0], [20.7, 4416.0], [20.8, 4528.0], [20.9, 4528.0], [21.0, 4547.0], [21.1, 4547.0], [21.2, 4568.0], [21.3, 4568.0], [21.4, 4572.0], [21.5, 4572.0], [21.6, 4579.0], [21.7, 4579.0], [21.8, 4583.0], [21.9, 4583.0], [22.0, 4597.0], [22.1, 4597.0], [22.2, 4630.0], [22.3, 4630.0], [22.4, 4632.0], [22.5, 4632.0], [22.6, 4633.0], [22.7, 4633.0], [22.8, 4641.0], [22.9, 4641.0], [23.0, 4698.0], [23.1, 4698.0], [23.2, 4766.0], [23.3, 4766.0], [23.4, 4837.0], [23.5, 4837.0], [23.6, 4857.0], [23.7, 4857.0], [23.8, 4878.0], [23.9, 4878.0], [24.0, 4887.0], [24.1, 4887.0], [24.2, 4901.0], [24.3, 4901.0], [24.4, 4929.0], [24.5, 4929.0], [24.6, 4938.0], [24.7, 4938.0], [24.8, 4942.0], [24.9, 4942.0], [25.0, 4965.0], [25.1, 4965.0], [25.2, 4976.0], [25.3, 4976.0], [25.4, 5033.0], [25.5, 5033.0], [25.6, 5035.0], [25.7, 5035.0], [25.8, 5037.0], [25.9, 5037.0], [26.0, 5053.0], [26.1, 5053.0], [26.2, 5060.0], [26.3, 5060.0], [26.4, 5060.0], [26.5, 5060.0], [26.6, 5074.0], [26.7, 5074.0], [26.8, 5078.0], [26.9, 5078.0], [27.0, 5082.0], [27.1, 5082.0], [27.2, 5084.0], [27.3, 5084.0], [27.4, 5110.0], [27.5, 5110.0], [27.6, 5116.0], [27.7, 5116.0], [27.8, 5120.0], [27.9, 5120.0], [28.0, 5123.0], [28.1, 5123.0], [28.2, 5149.0], [28.3, 5149.0], [28.4, 5168.0], [28.5, 5168.0], [28.6, 5219.0], [28.7, 5219.0], [28.8, 5232.0], [28.9, 5232.0], [29.0, 5367.0], [29.1, 5367.0], [29.2, 5384.0], [29.3, 5384.0], [29.4, 5392.0], [29.5, 5392.0], [29.6, 5395.0], [29.7, 5395.0], [29.8, 5410.0], [29.9, 5410.0], [30.0, 5420.0], [30.1, 5420.0], [30.2, 5423.0], [30.3, 5423.0], [30.4, 5435.0], [30.5, 5435.0], [30.6, 5443.0], [30.7, 5443.0], [30.8, 5444.0], [30.9, 5444.0], [31.0, 5447.0], [31.1, 5447.0], [31.2, 5465.0], [31.3, 5465.0], [31.4, 5476.0], [31.5, 5476.0], [31.6, 5487.0], [31.7, 5487.0], [31.8, 5502.0], [31.9, 5502.0], [32.0, 5523.0], [32.1, 5523.0], [32.2, 5530.0], [32.3, 5530.0], [32.4, 5531.0], [32.5, 5531.0], [32.6, 5532.0], [32.7, 5532.0], [32.8, 5553.0], [32.9, 5553.0], [33.0, 5572.0], [33.1, 5572.0], [33.2, 5586.0], [33.3, 5586.0], [33.4, 5670.0], [33.5, 5670.0], [33.6, 5675.0], [33.7, 5675.0], [33.8, 5676.0], [33.9, 5676.0], [34.0, 5683.0], [34.1, 5683.0], [34.2, 5685.0], [34.3, 5685.0], [34.4, 5709.0], [34.5, 5709.0], [34.6, 5738.0], [34.7, 5738.0], [34.8, 5743.0], [34.9, 5743.0], [35.0, 5748.0], [35.1, 5748.0], [35.2, 5753.0], [35.3, 5753.0], [35.4, 5769.0], [35.5, 5769.0], [35.6, 5769.0], [35.7, 5769.0], [35.8, 5803.0], [35.9, 5803.0], [36.0, 5815.0], [36.1, 5815.0], [36.2, 5815.0], [36.3, 5815.0], [36.4, 5822.0], [36.5, 5822.0], [36.6, 5822.0], [36.7, 5822.0], [36.8, 5828.0], [36.9, 5828.0], [37.0, 5855.0], [37.1, 5855.0], [37.2, 5857.0], [37.3, 5857.0], [37.4, 5878.0], [37.5, 5878.0], [37.6, 5879.0], [37.7, 5879.0], [37.8, 5912.0], [37.9, 5912.0], [38.0, 5919.0], [38.1, 5919.0], [38.2, 5929.0], [38.3, 5929.0], [38.4, 6073.0], [38.5, 6073.0], [38.6, 6075.0], [38.7, 6075.0], [38.8, 6160.0], [38.9, 6160.0], [39.0, 6160.0], [39.1, 6160.0], [39.2, 6173.0], [39.3, 6173.0], [39.4, 6181.0], [39.5, 6181.0], [39.6, 6206.0], [39.7, 6206.0], [39.8, 6206.0], [39.9, 6206.0], [40.0, 6210.0], [40.1, 6210.0], [40.2, 6214.0], [40.3, 6214.0], [40.4, 6274.0], [40.5, 6274.0], [40.6, 6285.0], [40.7, 6285.0], [40.8, 6285.0], [40.9, 6290.0], [41.0, 6290.0], [41.1, 6290.0], [41.2, 6292.0], [41.3, 6292.0], [41.4, 6292.0], [41.5, 6292.0], [41.6, 6293.0], [41.7, 6293.0], [41.8, 6293.0], [41.9, 6300.0], [42.0, 6300.0], [42.1, 6305.0], [42.2, 6305.0], [42.3, 6310.0], [42.4, 6310.0], [42.5, 6313.0], [42.6, 6313.0], [42.7, 6316.0], [42.8, 6316.0], [42.9, 6316.0], [43.0, 6316.0], [43.1, 6320.0], [43.2, 6320.0], [43.3, 6322.0], [43.4, 6322.0], [43.5, 6324.0], [43.6, 6324.0], [43.7, 6324.0], [43.8, 6324.0], [43.9, 6324.0], [44.0, 6324.0], [44.1, 6325.0], [44.2, 6325.0], [44.3, 6329.0], [44.4, 6329.0], [44.5, 6333.0], [44.6, 6333.0], [44.7, 6339.0], [44.8, 6339.0], [44.9, 6342.0], [45.0, 6342.0], [45.1, 6344.0], [45.2, 6344.0], [45.3, 6344.0], [45.4, 6344.0], [45.5, 6345.0], [45.6, 6345.0], [45.7, 6345.0], [45.8, 6345.0], [45.9, 6347.0], [46.0, 6347.0], [46.1, 6347.0], [46.2, 6347.0], [46.3, 6350.0], [46.4, 6350.0], [46.5, 6351.0], [46.6, 6351.0], [46.7, 6353.0], [46.8, 6353.0], [46.9, 6354.0], [47.0, 6354.0], [47.1, 6358.0], [47.2, 6358.0], [47.3, 6363.0], [47.4, 6363.0], [47.5, 6368.0], [47.6, 6368.0], [47.7, 6372.0], [47.8, 6372.0], [47.9, 6373.0], [48.0, 6373.0], [48.1, 6375.0], [48.2, 6375.0], [48.3, 6376.0], [48.4, 6376.0], [48.5, 6383.0], [48.6, 6383.0], [48.7, 6389.0], [48.8, 6389.0], [48.9, 6394.0], [49.0, 6394.0], [49.1, 6405.0], [49.2, 6405.0], [49.3, 6407.0], [49.4, 6407.0], [49.5, 6412.0], [49.6, 6412.0], [49.7, 6412.0], [49.8, 6412.0], [49.9, 6432.0], [50.0, 6432.0], [50.1, 6442.0], [50.2, 6442.0], [50.3, 6456.0], [50.4, 6456.0], [50.5, 6470.0], [50.6, 6470.0], [50.7, 6481.0], [50.8, 6481.0], [50.9, 6485.0], [51.0, 6485.0], [51.1, 6487.0], [51.2, 6487.0], [51.3, 6500.0], [51.4, 6500.0], [51.5, 6518.0], [51.6, 6518.0], [51.7, 6564.0], [51.8, 6564.0], [51.9, 6569.0], [52.0, 6569.0], [52.1, 6575.0], [52.2, 6575.0], [52.3, 6580.0], [52.4, 6580.0], [52.5, 6584.0], [52.6, 6584.0], [52.7, 6591.0], [52.8, 6591.0], [52.9, 6594.0], [53.0, 6594.0], [53.1, 6606.0], [53.2, 6606.0], [53.3, 6617.0], [53.4, 6617.0], [53.5, 6619.0], [53.6, 6619.0], [53.7, 6643.0], [53.8, 6643.0], [53.9, 6649.0], [54.0, 6649.0], [54.1, 6659.0], [54.2, 6659.0], [54.3, 6660.0], [54.4, 6660.0], [54.5, 6679.0], [54.6, 6679.0], [54.7, 6681.0], [54.8, 6681.0], [54.9, 6682.0], [55.0, 6682.0], [55.1, 6714.0], [55.2, 6714.0], [55.3, 6736.0], [55.4, 6736.0], [55.5, 6744.0], [55.6, 6744.0], [55.7, 6774.0], [55.8, 6774.0], [55.9, 6785.0], [56.0, 6785.0], [56.1, 6839.0], [56.2, 6839.0], [56.3, 6858.0], [56.4, 6858.0], [56.5, 6869.0], [56.6, 6869.0], [56.7, 6882.0], [56.8, 6882.0], [56.9, 6885.0], [57.0, 6885.0], [57.1, 6885.0], [57.2, 6885.0], [57.3, 6893.0], [57.4, 6893.0], [57.5, 6895.0], [57.6, 6895.0], [57.7, 6901.0], [57.8, 6901.0], [57.9, 6902.0], [58.0, 6902.0], [58.1, 6902.0], [58.2, 6902.0], [58.3, 6902.0], [58.4, 6902.0], [58.5, 6904.0], [58.6, 6904.0], [58.7, 6904.0], [58.8, 6904.0], [58.9, 6904.0], [59.0, 6904.0], [59.1, 6913.0], [59.2, 6913.0], [59.3, 6918.0], [59.4, 6918.0], [59.5, 6919.0], [59.6, 6919.0], [59.7, 6920.0], [59.8, 6920.0], [59.9, 6921.0], [60.0, 6921.0], [60.1, 6925.0], [60.2, 6925.0], [60.3, 6930.0], [60.4, 6930.0], [60.5, 6931.0], [60.6, 6931.0], [60.7, 6936.0], [60.8, 6936.0], [60.9, 6936.0], [61.0, 6936.0], [61.1, 6937.0], [61.2, 6937.0], [61.3, 6941.0], [61.4, 6941.0], [61.5, 6943.0], [61.6, 6943.0], [61.7, 6947.0], [61.8, 6947.0], [61.9, 6947.0], [62.0, 6947.0], [62.1, 6952.0], [62.2, 6952.0], [62.3, 6952.0], [62.4, 6952.0], [62.5, 6956.0], [62.6, 6956.0], [62.7, 6959.0], [62.8, 6959.0], [62.9, 6960.0], [63.0, 6960.0], [63.1, 6970.0], [63.2, 6970.0], [63.3, 6971.0], [63.4, 6971.0], [63.5, 6972.0], [63.6, 6972.0], [63.7, 6976.0], [63.8, 6976.0], [63.9, 6980.0], [64.0, 6980.0], [64.1, 6986.0], [64.2, 6986.0], [64.3, 6987.0], [64.4, 6987.0], [64.5, 6989.0], [64.6, 6989.0], [64.7, 6993.0], [64.8, 6993.0], [64.9, 6997.0], [65.0, 6997.0], [65.1, 7008.0], [65.2, 7008.0], [65.3, 7019.0], [65.4, 7019.0], [65.5, 7024.0], [65.6, 7024.0], [65.7, 7024.0], [65.8, 7024.0], [65.9, 7035.0], [66.0, 7035.0], [66.1, 7037.0], [66.2, 7037.0], [66.3, 7041.0], [66.4, 7041.0], [66.5, 7051.0], [66.6, 7051.0], [66.7, 7061.0], [66.8, 7061.0], [66.9, 7062.0], [67.0, 7062.0], [67.1, 7064.0], [67.2, 7064.0], [67.3, 7082.0], [67.4, 7082.0], [67.5, 7095.0], [67.6, 7095.0], [67.7, 7098.0], [67.8, 7098.0], [67.9, 7100.0], [68.0, 7100.0], [68.1, 7106.0], [68.2, 7106.0], [68.3, 7108.0], [68.4, 7108.0], [68.5, 7111.0], [68.6, 7111.0], [68.7, 7113.0], [68.8, 7113.0], [68.9, 7113.0], [69.0, 7113.0], [69.1, 7115.0], [69.2, 7115.0], [69.3, 7116.0], [69.4, 7116.0], [69.5, 7118.0], [69.6, 7118.0], [69.7, 7136.0], [69.8, 7136.0], [69.9, 7137.0], [70.0, 7137.0], [70.1, 7138.0], [70.2, 7138.0], [70.3, 7141.0], [70.4, 7141.0], [70.5, 7142.0], [70.6, 7142.0], [70.7, 7144.0], [70.8, 7144.0], [70.9, 7145.0], [71.0, 7145.0], [71.1, 7148.0], [71.2, 7148.0], [71.3, 7148.0], [71.4, 7148.0], [71.5, 7150.0], [71.6, 7150.0], [71.7, 7151.0], [71.8, 7151.0], [71.9, 7152.0], [72.0, 7152.0], [72.1, 7155.0], [72.2, 7155.0], [72.3, 7158.0], [72.4, 7158.0], [72.5, 7160.0], [72.6, 7160.0], [72.7, 7160.0], [72.8, 7160.0], [72.9, 7170.0], [73.0, 7170.0], [73.1, 7170.0], [73.2, 7170.0], [73.3, 7172.0], [73.4, 7172.0], [73.5, 7174.0], [73.6, 7174.0], [73.7, 7174.0], [73.8, 7174.0], [73.9, 7175.0], [74.0, 7175.0], [74.1, 7175.0], [74.2, 7175.0], [74.3, 7179.0], [74.4, 7179.0], [74.5, 7182.0], [74.6, 7182.0], [74.7, 7183.0], [74.8, 7183.0], [74.9, 7184.0], [75.0, 7184.0], [75.1, 7184.0], [75.2, 7184.0], [75.3, 7185.0], [75.4, 7185.0], [75.5, 7186.0], [75.6, 7186.0], [75.7, 7187.0], [75.8, 7187.0], [75.9, 7188.0], [76.0, 7188.0], [76.1, 7189.0], [76.2, 7189.0], [76.3, 7190.0], [76.4, 7190.0], [76.5, 7190.0], [76.6, 7190.0], [76.7, 7192.0], [76.8, 7192.0], [76.9, 7192.0], [77.0, 7192.0], [77.1, 7193.0], [77.2, 7193.0], [77.3, 7193.0], [77.4, 7193.0], [77.5, 7195.0], [77.6, 7195.0], [77.7, 7196.0], [77.8, 7196.0], [77.9, 7199.0], [78.0, 7199.0], [78.1, 7199.0], [78.2, 7199.0], [78.3, 7199.0], [78.4, 7199.0], [78.5, 7200.0], [78.6, 7200.0], [78.7, 7200.0], [78.8, 7200.0], [78.9, 7201.0], [79.0, 7201.0], [79.1, 7202.0], [79.2, 7202.0], [79.3, 7203.0], [79.4, 7203.0], [79.5, 7203.0], [79.6, 7203.0], [79.7, 7205.0], [79.8, 7205.0], [79.9, 7205.0], [80.0, 7205.0], [80.1, 7207.0], [80.2, 7207.0], [80.3, 7208.0], [80.4, 7208.0], [80.5, 7209.0], [80.6, 7209.0], [80.7, 7209.0], [80.8, 7209.0], [80.9, 7211.0], [81.0, 7211.0], [81.1, 7215.0], [81.2, 7215.0], [81.3, 7218.0], [81.4, 7218.0], [81.5, 7218.0], [81.6, 7218.0], [81.7, 7219.0], [81.8, 7219.0], [81.9, 7225.0], [82.0, 7225.0], [82.1, 7229.0], [82.2, 7229.0], [82.3, 7230.0], [82.4, 7230.0], [82.5, 7231.0], [82.6, 7231.0], [82.7, 7232.0], [82.8, 7232.0], [82.9, 7234.0], [83.0, 7234.0], [83.1, 7239.0], [83.2, 7239.0], [83.3, 7240.0], [83.4, 7240.0], [83.5, 7242.0], [83.6, 7242.0], [83.7, 7243.0], [83.8, 7243.0], [83.9, 7245.0], [84.0, 7245.0], [84.1, 7246.0], [84.2, 7246.0], [84.3, 7249.0], [84.4, 7249.0], [84.5, 7249.0], [84.6, 7249.0], [84.7, 7255.0], [84.8, 7255.0], [84.9, 7263.0], [85.0, 7263.0], [85.1, 7263.0], [85.2, 7263.0], [85.3, 7263.0], [85.4, 7263.0], [85.5, 7265.0], [85.6, 7265.0], [85.7, 7269.0], [85.8, 7269.0], [85.9, 7272.0], [86.0, 7272.0], [86.1, 7277.0], [86.2, 7277.0], [86.3, 7280.0], [86.4, 7280.0], [86.5, 7283.0], [86.6, 7283.0], [86.7, 7283.0], [86.8, 7283.0], [86.9, 7290.0], [87.0, 7290.0], [87.1, 7290.0], [87.2, 7290.0], [87.3, 7294.0], [87.4, 7294.0], [87.5, 7297.0], [87.6, 7297.0], [87.7, 7299.0], [87.8, 7299.0], [87.9, 7300.0], [88.0, 7300.0], [88.1, 7301.0], [88.2, 7301.0], [88.3, 7303.0], [88.4, 7303.0], [88.5, 7305.0], [88.6, 7305.0], [88.7, 7308.0], [88.8, 7308.0], [88.9, 7308.0], [89.0, 7308.0], [89.1, 7309.0], [89.2, 7309.0], [89.3, 7312.0], [89.4, 7312.0], [89.5, 7318.0], [89.6, 7318.0], [89.7, 7318.0], [89.8, 7318.0], [89.9, 7324.0], [90.0, 7324.0], [90.1, 7327.0], [90.2, 7327.0], [90.3, 7330.0], [90.4, 7330.0], [90.5, 7331.0], [90.6, 7331.0], [90.7, 7332.0], [90.8, 7332.0], [90.9, 7334.0], [91.0, 7334.0], [91.1, 7336.0], [91.2, 7336.0], [91.3, 7337.0], [91.4, 7337.0], [91.5, 7338.0], [91.6, 7338.0], [91.7, 7339.0], [91.8, 7339.0], [91.9, 7340.0], [92.0, 7340.0], [92.1, 7340.0], [92.2, 7340.0], [92.3, 7341.0], [92.4, 7341.0], [92.5, 7341.0], [92.6, 7341.0], [92.7, 7342.0], [92.8, 7342.0], [92.9, 7345.0], [93.0, 7345.0], [93.1, 7348.0], [93.2, 7348.0], [93.3, 7349.0], [93.4, 7349.0], [93.5, 7351.0], [93.6, 7351.0], [93.7, 7357.0], [93.8, 7357.0], [93.9, 7361.0], [94.0, 7361.0], [94.1, 7363.0], [94.2, 7363.0], [94.3, 7366.0], [94.4, 7366.0], [94.5, 7366.0], [94.6, 7366.0], [94.7, 7368.0], [94.8, 7368.0], [94.9, 7373.0], [95.0, 7373.0], [95.1, 7373.0], [95.2, 7373.0], [95.3, 7378.0], [95.4, 7378.0], [95.5, 7379.0], [95.6, 7379.0], [95.7, 7384.0], [95.8, 7384.0], [95.9, 7384.0], [96.0, 7384.0], [96.1, 7386.0], [96.2, 7386.0], [96.3, 7390.0], [96.4, 7390.0], [96.5, 7393.0], [96.6, 7393.0], [96.7, 7394.0], [96.8, 7394.0], [96.9, 7395.0], [97.0, 7395.0], [97.1, 7395.0], [97.2, 7395.0], [97.3, 7397.0], [97.4, 7397.0], [97.5, 7397.0], [97.6, 7397.0], [97.7, 7399.0], [97.8, 7399.0], [97.9, 7400.0], [98.0, 7400.0], [98.1, 7403.0], [98.2, 7403.0], [98.3, 7406.0], [98.4, 7406.0], [98.5, 7417.0], [98.6, 7417.0], [98.7, 7418.0], [98.8, 7418.0], [98.9, 7428.0], [99.0, 7428.0], [99.1, 7454.0], [99.2, 7454.0], [99.3, 7466.0], [99.4, 7466.0], [99.5, 7472.0], [99.6, 7472.0], [99.7, 7474.0], [99.8, 7474.0], [99.9, 7478.0], [100.0, 7478.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 400.0, "maxY": 53.0, "series": [{"data": [[800.0, 6.0], [900.0, 3.0], [1000.0, 1.0], [1100.0, 6.0], [1200.0, 3.0], [1300.0, 1.0], [1500.0, 9.0], [1600.0, 1.0], [2000.0, 2.0], [2100.0, 6.0], [2200.0, 2.0], [2400.0, 5.0], [2500.0, 5.0], [2900.0, 7.0], [3000.0, 3.0], [3300.0, 4.0], [3400.0, 4.0], [3500.0, 2.0], [3700.0, 8.0], [3600.0, 2.0], [3800.0, 1.0], [4200.0, 12.0], [4300.0, 7.0], [4100.0, 2.0], [4600.0, 5.0], [4500.0, 7.0], [4400.0, 1.0], [4700.0, 1.0], [4800.0, 4.0], [5000.0, 10.0], [5100.0, 6.0], [4900.0, 6.0], [5300.0, 4.0], [5200.0, 2.0], [5500.0, 8.0], [5400.0, 10.0], [5600.0, 5.0], [5800.0, 10.0], [5700.0, 7.0], [6100.0, 4.0], [6000.0, 2.0], [5900.0, 3.0], [6300.0, 36.0], [6200.0, 11.0], [6400.0, 11.0], [6500.0, 9.0], [6600.0, 10.0], [6700.0, 5.0], [6900.0, 37.0], [6800.0, 8.0], [7000.0, 14.0], [7100.0, 53.0], [7200.0, 47.0], [7300.0, 50.0], [7400.0, 11.0], [400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 479.0, "series": [{"data": [[0.0, 1.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 20.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 479.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 76.28712871287127, "minX": 1.68351216E12, "maxY": 81.60401002506273, "series": [{"data": [[1.68351216E12, 76.28712871287127], [1.68351222E12, 81.60401002506273]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68351222E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1926.0, "minX": 1.0, "maxY": 7372.5, "series": [{"data": [[2.0, 4176.0], [3.0, 4255.0], [4.0, 4182.0], [5.0, 4221.0], [6.0, 4261.0], [7.0, 4246.0], [8.0, 4336.0], [9.0, 2394.0], [10.0, 4630.0], [11.0, 4597.0], [12.0, 4416.0], [13.0, 4339.0], [14.0, 4374.0], [15.0, 4296.0], [16.0, 4583.0], [17.0, 4837.0], [18.0, 2859.0], [19.0, 4857.0], [20.0, 5082.0], [21.0, 5037.0], [22.0, 2960.5], [23.0, 2950.5], [24.0, 1926.0], [25.0, 2241.666666666667], [26.0, 2202.0], [27.0, 4878.0], [28.0, 4887.0], [29.0, 5392.0], [30.0, 5232.0], [31.0, 5395.0], [33.0, 5149.0], [32.0, 5168.0], [34.0, 3151.5], [35.0, 5367.0], [37.0, 5523.0], [36.0, 5423.0], [38.0, 2682.333333333333], [39.0, 2680.0], [40.0, 2625.0], [41.0, 2227.25], [43.0, 5465.0], [42.0, 5219.0], [45.0, 5476.0], [44.0, 5120.0], [47.0, 5683.0], [46.0, 5530.0], [49.0, 5912.0], [48.0, 5670.0], [51.0, 3759.0], [50.0, 5878.0], [53.0, 2959.666666666667], [52.0, 5738.0], [54.0, 2620.75], [55.0, 2616.75], [56.0, 3651.5], [57.0, 5675.0], [59.0, 5919.0], [58.0, 5676.0], [61.0, 6075.0], [60.0, 6074.0], [63.0, 6372.0], [62.0, 6231.571428571428], [66.0, 4137.5], [67.0, 6347.0], [65.0, 6292.5], [64.0, 6354.0], [68.0, 4257.5], [69.0, 3564.0], [70.0, 5536.933333333333], [71.0, 6333.0], [72.0, 4683.6], [75.0, 6458.0], [74.0, 6494.666666666667], [73.0, 6316.0], [79.0, 6902.0], [78.0, 6858.0], [77.0, 6456.0], [76.0, 6529.5], [82.0, 4776.0], [83.0, 4007.333333333333], [81.0, 6841.538461538461], [80.0, 6894.5], [84.0, 4738.0], [85.0, 4708.5], [86.0, 5420.333333333333], [87.0, 5377.0], [91.0, 7199.0], [90.0, 7063.833333333334], [89.0, 6929.875], [88.0, 6936.2307692307695], [95.0, 7260.0], [94.0, 7276.25], [93.0, 7257.166666666665], [92.0, 7161.0], [98.0, 6351.055555555555], [99.0, 7271.389830508477], [97.0, 7372.5], [96.0, 7266.0], [100.0, 5764.132450331124], [1.0, 3869.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[80.52999999999999, 5787.075999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 410.4, "minX": 1.68351216E12, "maxY": 1649.2, "series": [{"data": [[1.68351216E12, 410.4], [1.68351222E12, 1622.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68351216E12, 417.46666666666664], [1.68351222E12, 1649.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68351222E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 2716.1188118811883, "minX": 1.68351216E12, "maxY": 6564.436090225559, "series": [{"data": [[1.68351216E12, 2716.1188118811883], [1.68351222E12, 6564.436090225559]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68351222E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2716.089108910891, "minX": 1.68351216E12, "maxY": 6564.408521303262, "series": [{"data": [[1.68351216E12, 2716.089108910891], [1.68351222E12, 6564.408521303262]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68351222E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.027568922305764465, "minX": 1.68351216E12, "maxY": 0.4851485148514849, "series": [{"data": [[1.68351216E12, 0.4851485148514849], [1.68351222E12, 0.027568922305764465]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68351222E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 411.0, "minX": 1.68351216E12, "maxY": 7478.0, "series": [{"data": [[1.68351216E12, 4766.0], [1.68351222E12, 7478.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68351216E12, 4488.599999999999], [1.68351222E12, 7340.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68351216E12, 4764.64], [1.68351222E12, 7466.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68351216E12, 4626.7], [1.68351222E12, 7386.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68351216E12, 411.0], [1.68351222E12, 3869.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68351216E12, 2582.0], [1.68351222E12, 6925.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68351222E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 817.0, "minX": 3.0, "maxY": 7174.0, "series": [{"data": [[10.0, 6327.0], [11.0, 6749.5], [3.0, 817.0], [12.0, 6368.0], [13.0, 7144.0], [14.0, 6877.0], [15.0, 5523.0], [16.0, 6822.0], [17.0, 6736.0], [18.0, 6343.0], [19.0, 7174.0], [20.0, 5669.5], [7.0, 4221.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 817.0, "minX": 3.0, "maxY": 7174.0, "series": [{"data": [[10.0, 6327.0], [11.0, 6749.5], [3.0, 817.0], [12.0, 6368.0], [13.0, 7144.0], [14.0, 6877.0], [15.0, 5523.0], [16.0, 6822.0], [17.0, 6736.0], [18.0, 6343.0], [19.0, 7174.0], [20.0, 5669.5], [7.0, 4221.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.35, "minX": 1.68351216E12, "maxY": 4.983333333333333, "series": [{"data": [[1.68351216E12, 3.35], [1.68351222E12, 4.983333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68351222E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.68351216E12, "maxY": 6.65, "series": [{"data": [[1.68351216E12, 1.6833333333333333], [1.68351222E12, 6.65]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68351222E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.68351216E12, "maxY": 6.65, "series": [{"data": [[1.68351216E12, 1.6833333333333333], [1.68351222E12, 6.65]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68351222E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6833333333333333, "minX": 1.68351216E12, "maxY": 6.65, "series": [{"data": [[1.68351216E12, 1.6833333333333333], [1.68351222E12, 6.65]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68351222E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

