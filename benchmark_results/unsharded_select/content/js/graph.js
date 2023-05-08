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
        data: {"result": {"minY": 168.0, "minX": 0.0, "maxY": 3570.0, "series": [{"data": [[0.0, 168.0], [0.1, 168.0], [0.2, 168.0], [0.3, 168.0], [0.4, 168.0], [0.5, 236.0], [0.6, 236.0], [0.7, 236.0], [0.8, 236.0], [0.9, 236.0], [1.0, 293.0], [1.1, 293.0], [1.2, 293.0], [1.3, 293.0], [1.4, 293.0], [1.5, 384.0], [1.6, 384.0], [1.7, 384.0], [1.8, 384.0], [1.9, 384.0], [2.0, 401.0], [2.1, 401.0], [2.2, 401.0], [2.3, 401.0], [2.4, 401.0], [2.5, 430.0], [2.6, 430.0], [2.7, 430.0], [2.8, 430.0], [2.9, 430.0], [3.0, 461.0], [3.1, 461.0], [3.2, 461.0], [3.3, 461.0], [3.4, 461.0], [3.5, 501.0], [3.6, 501.0], [3.7, 501.0], [3.8, 501.0], [3.9, 501.0], [4.0, 542.0], [4.1, 542.0], [4.2, 542.0], [4.3, 542.0], [4.4, 542.0], [4.5, 586.0], [4.6, 586.0], [4.7, 586.0], [4.8, 586.0], [4.9, 586.0], [5.0, 587.0], [5.1, 587.0], [5.2, 587.0], [5.3, 587.0], [5.4, 587.0], [5.5, 633.0], [5.6, 633.0], [5.7, 633.0], [5.8, 633.0], [5.9, 633.0], [6.0, 634.0], [6.1, 634.0], [6.2, 634.0], [6.3, 634.0], [6.4, 634.0], [6.5, 666.0], [6.6, 666.0], [6.7, 666.0], [6.8, 666.0], [6.9, 666.0], [7.0, 680.0], [7.1, 680.0], [7.2, 680.0], [7.3, 680.0], [7.4, 680.0], [7.5, 688.0], [7.6, 688.0], [7.7, 688.0], [7.8, 688.0], [7.9, 688.0], [8.0, 694.0], [8.1, 694.0], [8.2, 694.0], [8.3, 694.0], [8.4, 694.0], [8.5, 706.0], [8.6, 706.0], [8.7, 706.0], [8.8, 706.0], [8.9, 706.0], [9.0, 716.0], [9.1, 716.0], [9.2, 716.0], [9.3, 716.0], [9.4, 716.0], [9.5, 722.0], [9.6, 722.0], [9.7, 722.0], [9.8, 722.0], [9.9, 722.0], [10.0, 723.0], [10.1, 723.0], [10.2, 723.0], [10.3, 723.0], [10.4, 723.0], [10.5, 723.0], [10.6, 723.0], [10.7, 723.0], [10.8, 723.0], [10.9, 723.0], [11.0, 737.0], [11.1, 737.0], [11.2, 737.0], [11.3, 737.0], [11.4, 737.0], [11.5, 779.0], [11.6, 779.0], [11.7, 779.0], [11.8, 779.0], [11.9, 779.0], [12.0, 788.0], [12.1, 788.0], [12.2, 788.0], [12.3, 788.0], [12.4, 788.0], [12.5, 838.0], [12.6, 838.0], [12.7, 838.0], [12.8, 838.0], [12.9, 838.0], [13.0, 854.0], [13.1, 854.0], [13.2, 854.0], [13.3, 854.0], [13.4, 854.0], [13.5, 867.0], [13.6, 867.0], [13.7, 867.0], [13.8, 867.0], [13.9, 867.0], [14.0, 887.0], [14.1, 887.0], [14.2, 887.0], [14.3, 887.0], [14.4, 887.0], [14.5, 892.0], [14.6, 892.0], [14.7, 892.0], [14.8, 892.0], [14.9, 892.0], [15.0, 923.0], [15.1, 923.0], [15.2, 923.0], [15.3, 923.0], [15.4, 923.0], [15.5, 954.0], [15.6, 954.0], [15.7, 954.0], [15.8, 954.0], [15.9, 954.0], [16.0, 988.0], [16.1, 988.0], [16.2, 988.0], [16.3, 988.0], [16.4, 988.0], [16.5, 993.0], [16.6, 993.0], [16.7, 993.0], [16.8, 993.0], [16.9, 993.0], [17.0, 1015.0], [17.1, 1015.0], [17.2, 1015.0], [17.3, 1015.0], [17.4, 1015.0], [17.5, 1052.0], [17.6, 1052.0], [17.7, 1052.0], [17.8, 1052.0], [17.9, 1052.0], [18.0, 1061.0], [18.1, 1061.0], [18.2, 1061.0], [18.3, 1061.0], [18.4, 1061.0], [18.5, 1097.0], [18.6, 1097.0], [18.7, 1097.0], [18.8, 1097.0], [18.9, 1097.0], [19.0, 1101.0], [19.1, 1101.0], [19.2, 1101.0], [19.3, 1101.0], [19.4, 1101.0], [19.5, 1110.0], [19.6, 1110.0], [19.7, 1110.0], [19.8, 1110.0], [19.9, 1110.0], [20.0, 1293.0], [20.1, 1293.0], [20.2, 1293.0], [20.3, 1293.0], [20.4, 1293.0], [20.5, 1296.0], [20.6, 1296.0], [20.7, 1296.0], [20.8, 1296.0], [20.9, 1296.0], [21.0, 1337.0], [21.1, 1337.0], [21.2, 1337.0], [21.3, 1337.0], [21.4, 1337.0], [21.5, 1348.0], [21.6, 1348.0], [21.7, 1348.0], [21.8, 1348.0], [21.9, 1348.0], [22.0, 1395.0], [22.1, 1395.0], [22.2, 1395.0], [22.3, 1395.0], [22.4, 1395.0], [22.5, 1412.0], [22.6, 1412.0], [22.7, 1412.0], [22.8, 1412.0], [22.9, 1412.0], [23.0, 1416.0], [23.1, 1416.0], [23.2, 1416.0], [23.3, 1416.0], [23.4, 1416.0], [23.5, 1420.0], [23.6, 1420.0], [23.7, 1420.0], [23.8, 1420.0], [23.9, 1420.0], [24.0, 1431.0], [24.1, 1431.0], [24.2, 1431.0], [24.3, 1431.0], [24.4, 1431.0], [24.5, 1451.0], [24.6, 1451.0], [24.7, 1451.0], [24.8, 1451.0], [24.9, 1451.0], [25.0, 1565.0], [25.1, 1565.0], [25.2, 1565.0], [25.3, 1565.0], [25.4, 1565.0], [25.5, 1572.0], [25.6, 1572.0], [25.7, 1572.0], [25.8, 1572.0], [25.9, 1572.0], [26.0, 1613.0], [26.1, 1613.0], [26.2, 1613.0], [26.3, 1613.0], [26.4, 1613.0], [26.5, 1616.0], [26.6, 1616.0], [26.7, 1616.0], [26.8, 1616.0], [26.9, 1616.0], [27.0, 1619.0], [27.1, 1619.0], [27.2, 1619.0], [27.3, 1619.0], [27.4, 1619.0], [27.5, 1620.0], [27.6, 1620.0], [27.7, 1620.0], [27.8, 1620.0], [27.9, 1620.0], [28.0, 1635.0], [28.1, 1635.0], [28.2, 1635.0], [28.3, 1635.0], [28.4, 1635.0], [28.5, 1639.0], [28.6, 1639.0], [28.7, 1639.0], [28.8, 1639.0], [28.9, 1639.0], [29.0, 1665.0], [29.1, 1665.0], [29.2, 1665.0], [29.3, 1665.0], [29.4, 1665.0], [29.5, 1669.0], [29.6, 1669.0], [29.7, 1669.0], [29.8, 1669.0], [29.9, 1669.0], [30.0, 1672.0], [30.1, 1672.0], [30.2, 1672.0], [30.3, 1672.0], [30.4, 1672.0], [30.5, 1696.0], [30.6, 1696.0], [30.7, 1696.0], [30.8, 1696.0], [30.9, 1696.0], [31.0, 1701.0], [31.1, 1701.0], [31.2, 1701.0], [31.3, 1701.0], [31.4, 1701.0], [31.5, 1707.0], [31.6, 1707.0], [31.7, 1707.0], [31.8, 1707.0], [31.9, 1707.0], [32.0, 1716.0], [32.1, 1716.0], [32.2, 1716.0], [32.3, 1716.0], [32.4, 1716.0], [32.5, 1728.0], [32.6, 1728.0], [32.7, 1728.0], [32.8, 1728.0], [32.9, 1728.0], [33.0, 1746.0], [33.1, 1746.0], [33.2, 1746.0], [33.3, 1746.0], [33.4, 1746.0], [33.5, 1746.0], [33.6, 1746.0], [33.7, 1746.0], [33.8, 1746.0], [33.9, 1746.0], [34.0, 1754.0], [34.1, 1754.0], [34.2, 1754.0], [34.3, 1754.0], [34.4, 1754.0], [34.5, 1761.0], [34.6, 1761.0], [34.7, 1761.0], [34.8, 1761.0], [34.9, 1761.0], [35.0, 1777.0], [35.1, 1777.0], [35.2, 1777.0], [35.3, 1777.0], [35.4, 1777.0], [35.5, 1788.0], [35.6, 1788.0], [35.7, 1788.0], [35.8, 1788.0], [35.9, 1788.0], [36.0, 1789.0], [36.1, 1789.0], [36.2, 1789.0], [36.3, 1789.0], [36.4, 1789.0], [36.5, 1793.0], [36.6, 1793.0], [36.7, 1793.0], [36.8, 1793.0], [36.9, 1793.0], [37.0, 1806.0], [37.1, 1806.0], [37.2, 1806.0], [37.3, 1806.0], [37.4, 1806.0], [37.5, 1843.0], [37.6, 1843.0], [37.7, 1843.0], [37.8, 1843.0], [37.9, 1843.0], [38.0, 1871.0], [38.1, 1871.0], [38.2, 1871.0], [38.3, 1871.0], [38.4, 1871.0], [38.5, 1873.0], [38.6, 1873.0], [38.7, 1873.0], [38.8, 1873.0], [38.9, 1873.0], [39.0, 1874.0], [39.1, 1874.0], [39.2, 1874.0], [39.3, 1874.0], [39.4, 1874.0], [39.5, 1914.0], [39.6, 1914.0], [39.7, 1914.0], [39.8, 1914.0], [39.9, 1914.0], [40.0, 1918.0], [40.1, 1918.0], [40.2, 1918.0], [40.3, 1918.0], [40.4, 1918.0], [40.5, 1950.0], [40.6, 1950.0], [40.7, 1950.0], [40.8, 1950.0], [40.9, 1950.0], [41.0, 1985.0], [41.1, 1985.0], [41.2, 1985.0], [41.3, 1985.0], [41.4, 1985.0], [41.5, 1995.0], [41.6, 1995.0], [41.7, 1995.0], [41.8, 1995.0], [41.9, 1995.0], [42.0, 2004.0], [42.1, 2004.0], [42.2, 2004.0], [42.3, 2004.0], [42.4, 2004.0], [42.5, 2017.0], [42.6, 2017.0], [42.7, 2017.0], [42.8, 2017.0], [42.9, 2017.0], [43.0, 2020.0], [43.1, 2020.0], [43.2, 2020.0], [43.3, 2020.0], [43.4, 2020.0], [43.5, 2034.0], [43.6, 2034.0], [43.7, 2034.0], [43.8, 2034.0], [43.9, 2034.0], [44.0, 2034.0], [44.1, 2034.0], [44.2, 2034.0], [44.3, 2034.0], [44.4, 2034.0], [44.5, 2053.0], [44.6, 2053.0], [44.7, 2053.0], [44.8, 2053.0], [44.9, 2053.0], [45.0, 2069.0], [45.1, 2069.0], [45.2, 2069.0], [45.3, 2069.0], [45.4, 2069.0], [45.5, 2074.0], [45.6, 2074.0], [45.7, 2074.0], [45.8, 2074.0], [45.9, 2074.0], [46.0, 2122.0], [46.1, 2122.0], [46.2, 2122.0], [46.3, 2122.0], [46.4, 2122.0], [46.5, 2130.0], [46.6, 2130.0], [46.7, 2130.0], [46.8, 2130.0], [46.9, 2130.0], [47.0, 2134.0], [47.1, 2134.0], [47.2, 2134.0], [47.3, 2134.0], [47.4, 2134.0], [47.5, 2163.0], [47.6, 2163.0], [47.7, 2163.0], [47.8, 2163.0], [47.9, 2163.0], [48.0, 2166.0], [48.1, 2166.0], [48.2, 2166.0], [48.3, 2166.0], [48.4, 2166.0], [48.5, 2174.0], [48.6, 2174.0], [48.7, 2174.0], [48.8, 2174.0], [48.9, 2174.0], [49.0, 2177.0], [49.1, 2177.0], [49.2, 2177.0], [49.3, 2177.0], [49.4, 2177.0], [49.5, 2184.0], [49.6, 2184.0], [49.7, 2184.0], [49.8, 2184.0], [49.9, 2184.0], [50.0, 2198.0], [50.1, 2198.0], [50.2, 2198.0], [50.3, 2198.0], [50.4, 2198.0], [50.5, 2207.0], [50.6, 2207.0], [50.7, 2207.0], [50.8, 2207.0], [50.9, 2207.0], [51.0, 2244.0], [51.1, 2244.0], [51.2, 2244.0], [51.3, 2244.0], [51.4, 2244.0], [51.5, 2256.0], [51.6, 2256.0], [51.7, 2256.0], [51.8, 2256.0], [51.9, 2256.0], [52.0, 2256.0], [52.1, 2256.0], [52.2, 2256.0], [52.3, 2256.0], [52.4, 2256.0], [52.5, 2292.0], [52.6, 2292.0], [52.7, 2292.0], [52.8, 2292.0], [52.9, 2292.0], [53.0, 2296.0], [53.1, 2296.0], [53.2, 2296.0], [53.3, 2296.0], [53.4, 2296.0], [53.5, 2296.0], [53.6, 2296.0], [53.7, 2296.0], [53.8, 2296.0], [53.9, 2296.0], [54.0, 2303.0], [54.1, 2303.0], [54.2, 2303.0], [54.3, 2303.0], [54.4, 2303.0], [54.5, 2309.0], [54.6, 2309.0], [54.7, 2309.0], [54.8, 2309.0], [54.9, 2309.0], [55.0, 2334.0], [55.1, 2334.0], [55.2, 2334.0], [55.3, 2334.0], [55.4, 2334.0], [55.5, 2357.0], [55.6, 2357.0], [55.7, 2357.0], [55.8, 2357.0], [55.9, 2357.0], [56.0, 2376.0], [56.1, 2376.0], [56.2, 2376.0], [56.3, 2376.0], [56.4, 2376.0], [56.5, 2404.0], [56.6, 2404.0], [56.7, 2404.0], [56.8, 2404.0], [56.9, 2404.0], [57.0, 2446.0], [57.1, 2446.0], [57.2, 2446.0], [57.3, 2446.0], [57.4, 2446.0], [57.5, 2458.0], [57.6, 2458.0], [57.7, 2458.0], [57.8, 2458.0], [57.9, 2458.0], [58.0, 2479.0], [58.1, 2479.0], [58.2, 2479.0], [58.3, 2479.0], [58.4, 2479.0], [58.5, 2480.0], [58.6, 2480.0], [58.7, 2480.0], [58.8, 2480.0], [58.9, 2480.0], [59.0, 2489.0], [59.1, 2489.0], [59.2, 2489.0], [59.3, 2489.0], [59.4, 2489.0], [59.5, 2489.0], [59.6, 2489.0], [59.7, 2489.0], [59.8, 2489.0], [59.9, 2489.0], [60.0, 2492.0], [60.1, 2492.0], [60.2, 2492.0], [60.3, 2492.0], [60.4, 2492.0], [60.5, 2499.0], [60.6, 2499.0], [60.7, 2499.0], [60.8, 2499.0], [60.9, 2499.0], [61.0, 2506.0], [61.1, 2506.0], [61.2, 2506.0], [61.3, 2506.0], [61.4, 2506.0], [61.5, 2524.0], [61.6, 2524.0], [61.7, 2524.0], [61.8, 2524.0], [61.9, 2524.0], [62.0, 2541.0], [62.1, 2541.0], [62.2, 2541.0], [62.3, 2541.0], [62.4, 2541.0], [62.5, 2553.0], [62.6, 2553.0], [62.7, 2553.0], [62.8, 2553.0], [62.9, 2553.0], [63.0, 2561.0], [63.1, 2561.0], [63.2, 2561.0], [63.3, 2561.0], [63.4, 2561.0], [63.5, 2566.0], [63.6, 2566.0], [63.7, 2566.0], [63.8, 2566.0], [63.9, 2566.0], [64.0, 2590.0], [64.1, 2590.0], [64.2, 2590.0], [64.3, 2590.0], [64.4, 2590.0], [64.5, 2607.0], [64.6, 2607.0], [64.7, 2607.0], [64.8, 2607.0], [64.9, 2607.0], [65.0, 2609.0], [65.1, 2609.0], [65.2, 2609.0], [65.3, 2609.0], [65.4, 2609.0], [65.5, 2620.0], [65.6, 2620.0], [65.7, 2620.0], [65.8, 2620.0], [65.9, 2620.0], [66.0, 2640.0], [66.1, 2640.0], [66.2, 2640.0], [66.3, 2640.0], [66.4, 2640.0], [66.5, 2658.0], [66.6, 2658.0], [66.7, 2658.0], [66.8, 2658.0], [66.9, 2658.0], [67.0, 2658.0], [67.1, 2658.0], [67.2, 2658.0], [67.3, 2658.0], [67.4, 2658.0], [67.5, 2676.0], [67.6, 2676.0], [67.7, 2676.0], [67.8, 2676.0], [67.9, 2676.0], [68.0, 2677.0], [68.1, 2677.0], [68.2, 2677.0], [68.3, 2677.0], [68.4, 2677.0], [68.5, 2682.0], [68.6, 2682.0], [68.7, 2682.0], [68.8, 2682.0], [68.9, 2682.0], [69.0, 2686.0], [69.1, 2686.0], [69.2, 2686.0], [69.3, 2686.0], [69.4, 2686.0], [69.5, 2690.0], [69.6, 2690.0], [69.7, 2690.0], [69.8, 2690.0], [69.9, 2690.0], [70.0, 2702.0], [70.1, 2702.0], [70.2, 2702.0], [70.3, 2702.0], [70.4, 2702.0], [70.5, 2713.0], [70.6, 2713.0], [70.7, 2713.0], [70.8, 2713.0], [70.9, 2713.0], [71.0, 2759.0], [71.1, 2759.0], [71.2, 2759.0], [71.3, 2759.0], [71.4, 2759.0], [71.5, 2765.0], [71.6, 2765.0], [71.7, 2765.0], [71.8, 2765.0], [71.9, 2765.0], [72.0, 2768.0], [72.1, 2768.0], [72.2, 2768.0], [72.3, 2768.0], [72.4, 2768.0], [72.5, 2785.0], [72.6, 2785.0], [72.7, 2785.0], [72.8, 2785.0], [72.9, 2785.0], [73.0, 2790.0], [73.1, 2790.0], [73.2, 2790.0], [73.3, 2790.0], [73.4, 2790.0], [73.5, 2801.0], [73.6, 2801.0], [73.7, 2801.0], [73.8, 2801.0], [73.9, 2801.0], [74.0, 2812.0], [74.1, 2812.0], [74.2, 2812.0], [74.3, 2812.0], [74.4, 2812.0], [74.5, 2816.0], [74.6, 2816.0], [74.7, 2816.0], [74.8, 2816.0], [74.9, 2816.0], [75.0, 2818.0], [75.1, 2818.0], [75.2, 2818.0], [75.3, 2818.0], [75.4, 2818.0], [75.5, 2831.0], [75.6, 2831.0], [75.7, 2831.0], [75.8, 2831.0], [75.9, 2831.0], [76.0, 2832.0], [76.1, 2832.0], [76.2, 2832.0], [76.3, 2832.0], [76.4, 2832.0], [76.5, 2853.0], [76.6, 2853.0], [76.7, 2853.0], [76.8, 2853.0], [76.9, 2853.0], [77.0, 2857.0], [77.1, 2857.0], [77.2, 2857.0], [77.3, 2857.0], [77.4, 2857.0], [77.5, 2876.0], [77.6, 2876.0], [77.7, 2876.0], [77.8, 2876.0], [77.9, 2876.0], [78.0, 2885.0], [78.1, 2885.0], [78.2, 2885.0], [78.3, 2885.0], [78.4, 2885.0], [78.5, 2898.0], [78.6, 2898.0], [78.7, 2898.0], [78.8, 2898.0], [78.9, 2898.0], [79.0, 2917.0], [79.1, 2917.0], [79.2, 2917.0], [79.3, 2917.0], [79.4, 2917.0], [79.5, 2925.0], [79.6, 2925.0], [79.7, 2925.0], [79.8, 2925.0], [79.9, 2925.0], [80.0, 2936.0], [80.1, 2936.0], [80.2, 2936.0], [80.3, 2936.0], [80.4, 2936.0], [80.5, 2939.0], [80.6, 2939.0], [80.7, 2939.0], [80.8, 2939.0], [80.9, 2939.0], [81.0, 2956.0], [81.1, 2956.0], [81.2, 2956.0], [81.3, 2956.0], [81.4, 2956.0], [81.5, 2971.0], [81.6, 2971.0], [81.7, 2971.0], [81.8, 2971.0], [81.9, 2971.0], [82.0, 2992.0], [82.1, 2992.0], [82.2, 2992.0], [82.3, 2992.0], [82.4, 2992.0], [82.5, 3032.0], [82.6, 3032.0], [82.7, 3032.0], [82.8, 3032.0], [82.9, 3032.0], [83.0, 3047.0], [83.1, 3047.0], [83.2, 3047.0], [83.3, 3047.0], [83.4, 3047.0], [83.5, 3049.0], [83.6, 3049.0], [83.7, 3049.0], [83.8, 3049.0], [83.9, 3049.0], [84.0, 3051.0], [84.1, 3051.0], [84.2, 3051.0], [84.3, 3051.0], [84.4, 3051.0], [84.5, 3064.0], [84.6, 3064.0], [84.7, 3064.0], [84.8, 3064.0], [84.9, 3064.0], [85.0, 3072.0], [85.1, 3072.0], [85.2, 3072.0], [85.3, 3072.0], [85.4, 3072.0], [85.5, 3073.0], [85.6, 3073.0], [85.7, 3073.0], [85.8, 3073.0], [85.9, 3073.0], [86.0, 3075.0], [86.1, 3075.0], [86.2, 3075.0], [86.3, 3075.0], [86.4, 3075.0], [86.5, 3094.0], [86.6, 3094.0], [86.7, 3094.0], [86.8, 3094.0], [86.9, 3094.0], [87.0, 3109.0], [87.1, 3109.0], [87.2, 3109.0], [87.3, 3109.0], [87.4, 3109.0], [87.5, 3123.0], [87.6, 3123.0], [87.7, 3123.0], [87.8, 3123.0], [87.9, 3123.0], [88.0, 3128.0], [88.1, 3128.0], [88.2, 3128.0], [88.3, 3128.0], [88.4, 3128.0], [88.5, 3161.0], [88.6, 3161.0], [88.7, 3161.0], [88.8, 3161.0], [88.9, 3161.0], [89.0, 3172.0], [89.1, 3172.0], [89.2, 3172.0], [89.3, 3172.0], [89.4, 3172.0], [89.5, 3176.0], [89.6, 3176.0], [89.7, 3176.0], [89.8, 3176.0], [89.9, 3176.0], [90.0, 3177.0], [90.1, 3177.0], [90.2, 3177.0], [90.3, 3177.0], [90.4, 3177.0], [90.5, 3209.0], [90.6, 3209.0], [90.7, 3209.0], [90.8, 3209.0], [90.9, 3209.0], [91.0, 3218.0], [91.1, 3218.0], [91.2, 3218.0], [91.3, 3218.0], [91.4, 3218.0], [91.5, 3220.0], [91.6, 3220.0], [91.7, 3220.0], [91.8, 3220.0], [91.9, 3220.0], [92.0, 3235.0], [92.1, 3235.0], [92.2, 3235.0], [92.3, 3235.0], [92.4, 3235.0], [92.5, 3253.0], [92.6, 3253.0], [92.7, 3253.0], [92.8, 3253.0], [92.9, 3253.0], [93.0, 3265.0], [93.1, 3265.0], [93.2, 3265.0], [93.3, 3265.0], [93.4, 3265.0], [93.5, 3267.0], [93.6, 3267.0], [93.7, 3267.0], [93.8, 3267.0], [93.9, 3267.0], [94.0, 3278.0], [94.1, 3278.0], [94.2, 3278.0], [94.3, 3278.0], [94.4, 3278.0], [94.5, 3284.0], [94.6, 3284.0], [94.7, 3284.0], [94.8, 3284.0], [94.9, 3284.0], [95.0, 3299.0], [95.1, 3299.0], [95.2, 3299.0], [95.3, 3299.0], [95.4, 3299.0], [95.5, 3300.0], [95.6, 3300.0], [95.7, 3300.0], [95.8, 3300.0], [95.9, 3300.0], [96.0, 3325.0], [96.1, 3325.0], [96.2, 3325.0], [96.3, 3325.0], [96.4, 3325.0], [96.5, 3449.0], [96.6, 3449.0], [96.7, 3449.0], [96.8, 3449.0], [96.9, 3449.0], [97.0, 3450.0], [97.1, 3450.0], [97.2, 3450.0], [97.3, 3450.0], [97.4, 3450.0], [97.5, 3460.0], [97.6, 3460.0], [97.7, 3460.0], [97.8, 3460.0], [97.9, 3460.0], [98.0, 3494.0], [98.1, 3494.0], [98.2, 3494.0], [98.3, 3494.0], [98.4, 3494.0], [98.5, 3523.0], [98.6, 3523.0], [98.7, 3523.0], [98.8, 3523.0], [98.9, 3523.0], [99.0, 3557.0], [99.1, 3557.0], [99.2, 3557.0], [99.3, 3557.0], [99.4, 3557.0], [99.5, 3570.0], [99.6, 3570.0], [99.7, 3570.0], [99.8, 3570.0], [99.9, 3570.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 12.0, "series": [{"data": [[600.0, 6.0], [700.0, 8.0], [800.0, 5.0], [900.0, 4.0], [1000.0, 4.0], [1100.0, 2.0], [1200.0, 2.0], [1300.0, 3.0], [1400.0, 5.0], [1500.0, 2.0], [100.0, 1.0], [1600.0, 10.0], [1700.0, 12.0], [1800.0, 5.0], [1900.0, 5.0], [2000.0, 8.0], [2100.0, 9.0], [2200.0, 7.0], [2300.0, 5.0], [2400.0, 9.0], [2500.0, 7.0], [2600.0, 11.0], [2700.0, 7.0], [2800.0, 11.0], [2900.0, 7.0], [3000.0, 9.0], [3100.0, 7.0], [200.0, 2.0], [3200.0, 10.0], [3300.0, 2.0], [3400.0, 4.0], [3500.0, 3.0], [300.0, 1.0], [400.0, 3.0], [500.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 150.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 43.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 150.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 14.86, "minX": 1.68350838E12, "maxY": 33.29333333333335, "series": [{"data": [[1.68350838E12, 14.86], [1.68350844E12, 33.29333333333335]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68350844E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 808.0, "minX": 1.0, "maxY": 3447.75, "series": [{"data": [[2.0, 1701.0], [3.0, 808.0], [4.0, 2134.0], [5.0, 1301.0], [6.0, 1007.3333333333334], [7.0, 1096.3333333333335], [8.0, 1495.0], [9.0, 1277.0], [10.0, 1699.0], [11.0, 1212.75], [12.0, 1167.75], [13.0, 1182.25], [14.0, 1114.8], [15.0, 1319.0], [16.0, 1446.25], [17.0, 1543.75], [18.0, 1332.0], [19.0, 1846.3333333333335], [20.0, 3049.0], [21.0, 2184.5], [22.0, 2296.5], [23.0, 1855.5], [24.0, 1845.75], [25.0, 1845.6], [26.0, 2226.3333333333335], [27.0, 2103.25], [28.0, 2118.5], [29.0, 3447.75], [30.0, 2172.4285714285716], [31.0, 2493.166666666667], [32.0, 2291.0], [33.0, 2449.8888888888887], [34.0, 2236.3333333333335], [35.0, 2162.25], [37.0, 2354.6], [36.0, 2859.8], [38.0, 2629.6666666666665], [39.0, 2176.2], [40.0, 2468.0], [41.0, 2924.0], [42.0, 2351.666666666667], [43.0, 2529.875], [44.0, 2576.6], [45.0, 2661.0000000000005], [46.0, 2638.8], [47.0, 2637.5], [49.0, 2686.0], [48.0, 2670.25], [1.0, 1761.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[28.684999999999988, 2097.7000000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 49.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 202.2, "minX": 1.68350838E12, "maxY": 620.0, "series": [{"data": [[1.68350838E12, 202.2], [1.68350844E12, 610.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68350838E12, 206.66666666666666], [1.68350844E12, 620.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68350844E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 858.1800000000001, "minX": 1.68350838E12, "maxY": 2510.8733333333334, "series": [{"data": [[1.68350838E12, 858.1800000000001], [1.68350844E12, 2510.8733333333334]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68350844E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 858.1400000000001, "minX": 1.68350838E12, "maxY": 2510.8600000000006, "series": [{"data": [[1.68350838E12, 858.1400000000001], [1.68350844E12, 2510.8600000000006]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68350844E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.08666666666666666, "minX": 1.68350838E12, "maxY": 0.14, "series": [{"data": [[1.68350838E12, 0.14], [1.68350844E12, 0.08666666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68350844E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 168.0, "minX": 1.68350838E12, "maxY": 3570.0, "series": [{"data": [[1.68350838E12, 1451.0], [1.68350844E12, 3570.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68350838E12, 1410.3], [1.68350844E12, 3251.2000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68350838E12, 1451.0], [1.68350844E12, 3563.37]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68350838E12, 1424.95], [1.68350844E12, 3380.7999999999984]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68350838E12, 168.0], [1.68350844E12, 1565.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68350838E12, 813.0], [1.68350844E12, 2547.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68350844E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 202.0, "minX": 2.0, "maxY": 2865.0, "series": [{"data": [[2.0, 202.0], [16.0, 2817.0], [9.0, 461.0], [10.0, 1403.5], [12.0, 2865.0], [13.0, 1635.0], [14.0, 2225.5], [15.0, 2120.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 202.0, "minX": 2.0, "maxY": 2865.0, "series": [{"data": [[2.0, 202.0], [16.0, 2817.0], [9.0, 461.0], [10.0, 1403.5], [12.0, 2865.0], [13.0, 1635.0], [14.0, 2225.5], [15.0, 2120.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 16.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.25, "minX": 1.68350838E12, "maxY": 2.0833333333333335, "series": [{"data": [[1.68350838E12, 1.25], [1.68350844E12, 2.0833333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68350844E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.68350838E12, "maxY": 2.5, "series": [{"data": [[1.68350838E12, 0.8333333333333334], [1.68350844E12, 2.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68350844E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.68350838E12, "maxY": 2.5, "series": [{"data": [[1.68350838E12, 0.8333333333333334], [1.68350844E12, 2.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68350844E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.8333333333333334, "minX": 1.68350838E12, "maxY": 2.5, "series": [{"data": [[1.68350838E12, 0.8333333333333334], [1.68350844E12, 2.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68350844E12, "title": "Total Transactions Per Second"}},
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
