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
        data: {"result": {"minY": 283.0, "minX": 0.0, "maxY": 2315.0, "series": [{"data": [[0.0, 283.0], [0.1, 283.0], [0.2, 292.0], [0.3, 292.0], [0.4, 301.0], [0.5, 301.0], [0.6, 301.0], [0.7, 304.0], [0.8, 306.0], [0.9, 306.0], [1.0, 311.0], [1.1, 311.0], [1.2, 317.0], [1.3, 317.0], [1.4, 318.0], [1.5, 318.0], [1.6, 323.0], [1.7, 323.0], [1.8, 325.0], [1.9, 325.0], [2.0, 335.0], [2.1, 335.0], [2.2, 365.0], [2.3, 365.0], [2.4, 382.0], [2.5, 382.0], [2.6, 406.0], [2.7, 406.0], [2.8, 406.0], [2.9, 408.0], [3.0, 408.0], [3.1, 413.0], [3.2, 413.0], [3.3, 430.0], [3.4, 430.0], [3.5, 431.0], [3.6, 431.0], [3.7, 435.0], [3.8, 435.0], [3.9, 448.0], [4.0, 448.0], [4.1, 450.0], [4.2, 450.0], [4.3, 453.0], [4.4, 453.0], [4.5, 455.0], [4.6, 455.0], [4.7, 458.0], [4.8, 458.0], [4.9, 459.0], [5.0, 459.0], [5.1, 461.0], [5.2, 461.0], [5.3, 462.0], [5.4, 462.0], [5.5, 464.0], [5.6, 464.0], [5.7, 473.0], [5.8, 473.0], [5.9, 475.0], [6.0, 475.0], [6.1, 490.0], [6.2, 490.0], [6.3, 509.0], [6.4, 509.0], [6.5, 525.0], [6.6, 525.0], [6.7, 527.0], [6.8, 527.0], [6.9, 538.0], [7.0, 538.0], [7.1, 546.0], [7.2, 546.0], [7.3, 548.0], [7.4, 548.0], [7.5, 548.0], [7.6, 548.0], [7.7, 550.0], [7.8, 550.0], [7.9, 555.0], [8.0, 555.0], [8.1, 562.0], [8.2, 562.0], [8.3, 577.0], [8.4, 577.0], [8.5, 581.0], [8.6, 581.0], [8.7, 584.0], [8.8, 586.0], [8.9, 586.0], [9.0, 598.0], [9.1, 598.0], [9.2, 600.0], [9.3, 600.0], [9.4, 602.0], [9.5, 602.0], [9.6, 620.0], [9.7, 620.0], [9.8, 651.0], [9.9, 651.0], [10.0, 652.0], [10.1, 652.0], [10.2, 658.0], [10.3, 658.0], [10.4, 675.0], [10.5, 675.0], [10.6, 678.0], [10.7, 678.0], [10.8, 683.0], [10.9, 683.0], [11.0, 695.0], [11.1, 695.0], [11.2, 707.0], [11.3, 707.0], [11.4, 735.0], [11.5, 735.0], [11.6, 737.0], [11.7, 737.0], [11.8, 738.0], [11.9, 738.0], [12.0, 739.0], [12.1, 739.0], [12.2, 745.0], [12.3, 745.0], [12.4, 760.0], [12.5, 760.0], [12.6, 767.0], [12.7, 767.0], [12.8, 773.0], [12.9, 773.0], [13.0, 775.0], [13.1, 775.0], [13.2, 797.0], [13.3, 797.0], [13.4, 801.0], [13.5, 801.0], [13.6, 801.0], [13.7, 801.0], [13.8, 836.0], [13.9, 836.0], [14.0, 850.0], [14.1, 850.0], [14.2, 850.0], [14.3, 850.0], [14.4, 865.0], [14.5, 865.0], [14.6, 874.0], [14.7, 874.0], [14.8, 875.0], [14.9, 875.0], [15.0, 875.0], [15.1, 875.0], [15.2, 881.0], [15.3, 881.0], [15.4, 881.0], [15.5, 881.0], [15.6, 885.0], [15.7, 885.0], [15.8, 889.0], [15.9, 889.0], [16.0, 889.0], [16.1, 889.0], [16.2, 891.0], [16.3, 891.0], [16.4, 899.0], [16.5, 899.0], [16.6, 906.0], [16.7, 906.0], [16.8, 925.0], [16.9, 925.0], [17.0, 936.0], [17.1, 936.0], [17.2, 953.0], [17.3, 953.0], [17.4, 954.0], [17.5, 954.0], [17.6, 960.0], [17.7, 960.0], [17.8, 965.0], [17.9, 965.0], [18.0, 979.0], [18.1, 979.0], [18.2, 986.0], [18.3, 986.0], [18.4, 988.0], [18.5, 988.0], [18.6, 994.0], [18.7, 994.0], [18.8, 1000.0], [18.9, 1000.0], [19.0, 1000.0], [19.1, 1000.0], [19.2, 1007.0], [19.3, 1007.0], [19.4, 1012.0], [19.5, 1012.0], [19.6, 1020.0], [19.7, 1020.0], [19.8, 1024.0], [19.9, 1024.0], [20.0, 1025.0], [20.1, 1025.0], [20.2, 1035.0], [20.3, 1035.0], [20.4, 1044.0], [20.5, 1044.0], [20.6, 1049.0], [20.7, 1049.0], [20.8, 1050.0], [20.9, 1050.0], [21.0, 1054.0], [21.1, 1054.0], [21.2, 1055.0], [21.3, 1055.0], [21.4, 1056.0], [21.5, 1056.0], [21.6, 1059.0], [21.7, 1059.0], [21.8, 1077.0], [21.9, 1077.0], [22.0, 1081.0], [22.1, 1081.0], [22.2, 1082.0], [22.3, 1082.0], [22.4, 1082.0], [22.5, 1082.0], [22.6, 1103.0], [22.7, 1103.0], [22.8, 1109.0], [22.9, 1109.0], [23.0, 1112.0], [23.1, 1112.0], [23.2, 1123.0], [23.3, 1123.0], [23.4, 1125.0], [23.5, 1125.0], [23.6, 1127.0], [23.7, 1127.0], [23.8, 1134.0], [23.9, 1134.0], [24.0, 1138.0], [24.1, 1138.0], [24.2, 1139.0], [24.3, 1139.0], [24.4, 1144.0], [24.5, 1144.0], [24.6, 1145.0], [24.7, 1145.0], [24.8, 1146.0], [24.9, 1146.0], [25.0, 1162.0], [25.1, 1162.0], [25.2, 1168.0], [25.3, 1168.0], [25.4, 1171.0], [25.5, 1171.0], [25.6, 1172.0], [25.7, 1172.0], [25.8, 1189.0], [25.9, 1189.0], [26.0, 1195.0], [26.1, 1195.0], [26.2, 1226.0], [26.3, 1226.0], [26.4, 1241.0], [26.5, 1241.0], [26.6, 1246.0], [26.7, 1246.0], [26.8, 1246.0], [26.9, 1246.0], [27.0, 1246.0], [27.1, 1246.0], [27.2, 1247.0], [27.3, 1247.0], [27.4, 1251.0], [27.5, 1251.0], [27.6, 1252.0], [27.7, 1252.0], [27.8, 1256.0], [27.9, 1256.0], [28.0, 1256.0], [28.1, 1256.0], [28.2, 1258.0], [28.3, 1258.0], [28.4, 1259.0], [28.5, 1259.0], [28.6, 1261.0], [28.7, 1261.0], [28.8, 1267.0], [28.9, 1267.0], [29.0, 1287.0], [29.1, 1287.0], [29.2, 1293.0], [29.3, 1293.0], [29.4, 1298.0], [29.5, 1298.0], [29.6, 1301.0], [29.7, 1301.0], [29.8, 1316.0], [29.9, 1316.0], [30.0, 1321.0], [30.1, 1321.0], [30.2, 1327.0], [30.3, 1327.0], [30.4, 1336.0], [30.5, 1336.0], [30.6, 1344.0], [30.7, 1344.0], [30.8, 1348.0], [30.9, 1348.0], [31.0, 1348.0], [31.1, 1348.0], [31.2, 1348.0], [31.3, 1348.0], [31.4, 1351.0], [31.5, 1351.0], [31.6, 1354.0], [31.7, 1354.0], [31.8, 1359.0], [31.9, 1359.0], [32.0, 1369.0], [32.1, 1369.0], [32.2, 1371.0], [32.3, 1371.0], [32.4, 1383.0], [32.5, 1383.0], [32.6, 1385.0], [32.7, 1385.0], [32.8, 1409.0], [32.9, 1409.0], [33.0, 1412.0], [33.1, 1412.0], [33.2, 1413.0], [33.3, 1413.0], [33.4, 1414.0], [33.5, 1414.0], [33.6, 1422.0], [33.7, 1422.0], [33.8, 1428.0], [33.9, 1428.0], [34.0, 1428.0], [34.1, 1428.0], [34.2, 1432.0], [34.3, 1432.0], [34.4, 1433.0], [34.5, 1433.0], [34.6, 1440.0], [34.7, 1440.0], [34.8, 1451.0], [34.9, 1451.0], [35.0, 1453.0], [35.1, 1453.0], [35.2, 1459.0], [35.3, 1459.0], [35.4, 1462.0], [35.5, 1462.0], [35.6, 1463.0], [35.7, 1463.0], [35.8, 1467.0], [35.9, 1467.0], [36.0, 1468.0], [36.1, 1468.0], [36.2, 1471.0], [36.3, 1471.0], [36.4, 1481.0], [36.5, 1481.0], [36.6, 1483.0], [36.7, 1483.0], [36.8, 1484.0], [36.9, 1484.0], [37.0, 1486.0], [37.1, 1486.0], [37.2, 1486.0], [37.3, 1486.0], [37.4, 1486.0], [37.5, 1486.0], [37.6, 1486.0], [37.7, 1486.0], [37.8, 1490.0], [37.9, 1490.0], [38.0, 1493.0], [38.1, 1493.0], [38.2, 1495.0], [38.3, 1495.0], [38.4, 1502.0], [38.5, 1502.0], [38.6, 1505.0], [38.7, 1505.0], [38.8, 1505.0], [38.9, 1510.0], [39.0, 1510.0], [39.1, 1511.0], [39.2, 1511.0], [39.3, 1514.0], [39.4, 1514.0], [39.5, 1520.0], [39.6, 1520.0], [39.7, 1525.0], [39.8, 1525.0], [39.9, 1544.0], [40.0, 1544.0], [40.1, 1548.0], [40.2, 1548.0], [40.3, 1553.0], [40.4, 1553.0], [40.5, 1553.0], [40.6, 1553.0], [40.7, 1561.0], [40.8, 1561.0], [40.9, 1574.0], [41.0, 1574.0], [41.1, 1575.0], [41.2, 1575.0], [41.3, 1576.0], [41.4, 1576.0], [41.5, 1578.0], [41.6, 1578.0], [41.7, 1579.0], [41.8, 1579.0], [41.9, 1580.0], [42.0, 1580.0], [42.1, 1583.0], [42.2, 1583.0], [42.3, 1584.0], [42.4, 1584.0], [42.5, 1587.0], [42.6, 1587.0], [42.7, 1594.0], [42.8, 1594.0], [42.9, 1599.0], [43.0, 1599.0], [43.1, 1603.0], [43.2, 1603.0], [43.3, 1615.0], [43.4, 1615.0], [43.5, 1620.0], [43.6, 1620.0], [43.7, 1629.0], [43.8, 1629.0], [43.9, 1633.0], [44.0, 1633.0], [44.1, 1642.0], [44.2, 1642.0], [44.3, 1642.0], [44.4, 1642.0], [44.5, 1643.0], [44.6, 1643.0], [44.7, 1645.0], [44.8, 1645.0], [44.9, 1647.0], [45.0, 1647.0], [45.1, 1648.0], [45.2, 1648.0], [45.3, 1650.0], [45.4, 1650.0], [45.5, 1653.0], [45.6, 1653.0], [45.7, 1655.0], [45.8, 1655.0], [45.9, 1658.0], [46.0, 1658.0], [46.1, 1665.0], [46.2, 1665.0], [46.3, 1668.0], [46.4, 1668.0], [46.5, 1668.0], [46.6, 1668.0], [46.7, 1670.0], [46.8, 1670.0], [46.9, 1671.0], [47.0, 1671.0], [47.1, 1672.0], [47.2, 1672.0], [47.3, 1678.0], [47.4, 1678.0], [47.5, 1684.0], [47.6, 1684.0], [47.7, 1688.0], [47.8, 1688.0], [47.9, 1688.0], [48.0, 1688.0], [48.1, 1691.0], [48.2, 1691.0], [48.3, 1694.0], [48.4, 1694.0], [48.5, 1697.0], [48.6, 1697.0], [48.7, 1705.0], [48.8, 1705.0], [48.9, 1709.0], [49.0, 1709.0], [49.1, 1715.0], [49.2, 1715.0], [49.3, 1723.0], [49.4, 1723.0], [49.5, 1723.0], [49.6, 1723.0], [49.7, 1724.0], [49.8, 1724.0], [49.9, 1725.0], [50.0, 1725.0], [50.1, 1726.0], [50.2, 1726.0], [50.3, 1728.0], [50.4, 1728.0], [50.5, 1730.0], [50.6, 1730.0], [50.7, 1746.0], [50.8, 1746.0], [50.9, 1747.0], [51.0, 1747.0], [51.1, 1748.0], [51.2, 1748.0], [51.3, 1750.0], [51.4, 1750.0], [51.5, 1750.0], [51.6, 1750.0], [51.7, 1752.0], [51.8, 1752.0], [51.9, 1758.0], [52.0, 1758.0], [52.1, 1758.0], [52.2, 1758.0], [52.3, 1762.0], [52.4, 1762.0], [52.5, 1770.0], [52.6, 1770.0], [52.7, 1771.0], [52.8, 1771.0], [52.9, 1772.0], [53.0, 1772.0], [53.1, 1773.0], [53.2, 1773.0], [53.3, 1776.0], [53.4, 1776.0], [53.5, 1784.0], [53.6, 1784.0], [53.7, 1793.0], [53.8, 1793.0], [53.9, 1794.0], [54.0, 1794.0], [54.1, 1795.0], [54.2, 1795.0], [54.3, 1796.0], [54.4, 1796.0], [54.5, 1798.0], [54.6, 1798.0], [54.7, 1799.0], [54.8, 1799.0], [54.9, 1802.0], [55.0, 1802.0], [55.1, 1803.0], [55.2, 1803.0], [55.3, 1805.0], [55.4, 1805.0], [55.5, 1806.0], [55.6, 1806.0], [55.7, 1809.0], [55.8, 1809.0], [55.9, 1813.0], [56.0, 1813.0], [56.1, 1813.0], [56.2, 1813.0], [56.3, 1815.0], [56.4, 1815.0], [56.5, 1820.0], [56.6, 1820.0], [56.7, 1821.0], [56.8, 1821.0], [56.9, 1821.0], [57.0, 1821.0], [57.1, 1822.0], [57.2, 1822.0], [57.3, 1823.0], [57.4, 1823.0], [57.5, 1823.0], [57.6, 1823.0], [57.7, 1825.0], [57.8, 1825.0], [57.9, 1825.0], [58.0, 1825.0], [58.1, 1827.0], [58.2, 1827.0], [58.3, 1827.0], [58.4, 1827.0], [58.5, 1829.0], [58.6, 1829.0], [58.7, 1829.0], [58.8, 1829.0], [58.9, 1831.0], [59.0, 1831.0], [59.1, 1833.0], [59.2, 1833.0], [59.3, 1835.0], [59.4, 1835.0], [59.5, 1836.0], [59.6, 1836.0], [59.7, 1836.0], [59.8, 1836.0], [59.9, 1839.0], [60.0, 1839.0], [60.1, 1839.0], [60.2, 1839.0], [60.3, 1841.0], [60.4, 1841.0], [60.5, 1842.0], [60.6, 1842.0], [60.7, 1844.0], [60.8, 1844.0], [60.9, 1846.0], [61.0, 1846.0], [61.1, 1847.0], [61.2, 1847.0], [61.3, 1850.0], [61.4, 1850.0], [61.5, 1859.0], [61.6, 1859.0], [61.7, 1859.0], [61.8, 1859.0], [61.9, 1861.0], [62.0, 1861.0], [62.1, 1865.0], [62.2, 1865.0], [62.3, 1866.0], [62.4, 1866.0], [62.5, 1866.0], [62.6, 1866.0], [62.7, 1867.0], [62.8, 1867.0], [62.9, 1873.0], [63.0, 1873.0], [63.1, 1888.0], [63.2, 1888.0], [63.3, 1893.0], [63.4, 1893.0], [63.5, 1900.0], [63.6, 1900.0], [63.7, 1900.0], [63.8, 1900.0], [63.9, 1901.0], [64.0, 1901.0], [64.1, 1902.0], [64.2, 1902.0], [64.3, 1904.0], [64.4, 1904.0], [64.5, 1905.0], [64.6, 1905.0], [64.7, 1905.0], [64.8, 1905.0], [64.9, 1906.0], [65.0, 1906.0], [65.1, 1908.0], [65.2, 1908.0], [65.3, 1908.0], [65.4, 1908.0], [65.5, 1909.0], [65.6, 1909.0], [65.7, 1909.0], [65.8, 1909.0], [65.9, 1911.0], [66.0, 1911.0], [66.1, 1917.0], [66.2, 1917.0], [66.3, 1923.0], [66.4, 1923.0], [66.5, 1925.0], [66.6, 1925.0], [66.7, 1926.0], [66.8, 1926.0], [66.9, 1933.0], [67.0, 1933.0], [67.1, 1934.0], [67.2, 1934.0], [67.3, 1935.0], [67.4, 1935.0], [67.5, 1936.0], [67.6, 1936.0], [67.7, 1936.0], [67.8, 1936.0], [67.9, 1939.0], [68.0, 1939.0], [68.1, 1940.0], [68.2, 1940.0], [68.3, 1941.0], [68.4, 1941.0], [68.5, 1944.0], [68.6, 1944.0], [68.7, 1945.0], [68.8, 1945.0], [68.9, 1946.0], [69.0, 1946.0], [69.1, 1947.0], [69.2, 1947.0], [69.3, 1948.0], [69.4, 1948.0], [69.5, 1950.0], [69.6, 1950.0], [69.7, 1950.0], [69.8, 1950.0], [69.9, 1952.0], [70.0, 1952.0], [70.1, 1953.0], [70.2, 1953.0], [70.3, 1956.0], [70.4, 1956.0], [70.5, 1957.0], [70.6, 1957.0], [70.7, 1957.0], [70.8, 1957.0], [70.9, 1958.0], [71.0, 1958.0], [71.1, 1962.0], [71.2, 1962.0], [71.3, 1964.0], [71.4, 1964.0], [71.5, 1967.0], [71.6, 1967.0], [71.7, 1986.0], [71.8, 1986.0], [71.9, 1986.0], [72.0, 1986.0], [72.1, 1987.0], [72.2, 1987.0], [72.3, 1990.0], [72.4, 1990.0], [72.5, 1991.0], [72.6, 1991.0], [72.7, 1992.0], [72.8, 1992.0], [72.9, 1992.0], [73.0, 1992.0], [73.1, 1996.0], [73.2, 1996.0], [73.3, 1996.0], [73.4, 1996.0], [73.5, 2001.0], [73.6, 2001.0], [73.7, 2002.0], [73.8, 2002.0], [73.9, 2002.0], [74.0, 2002.0], [74.1, 2002.0], [74.2, 2002.0], [74.3, 2005.0], [74.4, 2005.0], [74.5, 2006.0], [74.6, 2006.0], [74.7, 2006.0], [74.8, 2006.0], [74.9, 2008.0], [75.0, 2008.0], [75.1, 2008.0], [75.2, 2008.0], [75.3, 2011.0], [75.4, 2011.0], [75.5, 2013.0], [75.6, 2013.0], [75.7, 2014.0], [75.8, 2014.0], [75.9, 2015.0], [76.0, 2015.0], [76.1, 2015.0], [76.2, 2015.0], [76.3, 2016.0], [76.4, 2016.0], [76.5, 2016.0], [76.6, 2016.0], [76.7, 2017.0], [76.8, 2017.0], [76.9, 2017.0], [77.0, 2017.0], [77.1, 2018.0], [77.2, 2018.0], [77.3, 2022.0], [77.4, 2022.0], [77.5, 2025.0], [77.6, 2025.0], [77.7, 2026.0], [77.8, 2026.0], [77.9, 2027.0], [78.0, 2027.0], [78.1, 2027.0], [78.2, 2027.0], [78.3, 2030.0], [78.4, 2030.0], [78.5, 2030.0], [78.6, 2030.0], [78.7, 2032.0], [78.8, 2032.0], [78.9, 2033.0], [79.0, 2033.0], [79.1, 2034.0], [79.2, 2034.0], [79.3, 2037.0], [79.4, 2037.0], [79.5, 2038.0], [79.6, 2038.0], [79.7, 2038.0], [79.8, 2038.0], [79.9, 2039.0], [80.0, 2039.0], [80.1, 2040.0], [80.2, 2040.0], [80.3, 2042.0], [80.4, 2042.0], [80.5, 2044.0], [80.6, 2044.0], [80.7, 2045.0], [80.8, 2045.0], [80.9, 2045.0], [81.0, 2045.0], [81.1, 2046.0], [81.2, 2046.0], [81.3, 2047.0], [81.4, 2047.0], [81.5, 2047.0], [81.6, 2047.0], [81.7, 2048.0], [81.8, 2048.0], [81.9, 2048.0], [82.0, 2048.0], [82.1, 2050.0], [82.2, 2050.0], [82.3, 2052.0], [82.4, 2052.0], [82.5, 2053.0], [82.6, 2053.0], [82.7, 2053.0], [82.8, 2053.0], [82.9, 2055.0], [83.0, 2055.0], [83.1, 2058.0], [83.2, 2058.0], [83.3, 2061.0], [83.4, 2061.0], [83.5, 2065.0], [83.6, 2065.0], [83.7, 2068.0], [83.8, 2068.0], [83.9, 2074.0], [84.0, 2074.0], [84.1, 2078.0], [84.2, 2078.0], [84.3, 2082.0], [84.4, 2082.0], [84.5, 2083.0], [84.6, 2083.0], [84.7, 2086.0], [84.8, 2086.0], [84.9, 2087.0], [85.0, 2087.0], [85.1, 2087.0], [85.2, 2087.0], [85.3, 2089.0], [85.4, 2089.0], [85.5, 2089.0], [85.6, 2089.0], [85.7, 2091.0], [85.8, 2091.0], [85.9, 2094.0], [86.0, 2094.0], [86.1, 2094.0], [86.2, 2094.0], [86.3, 2096.0], [86.4, 2096.0], [86.5, 2096.0], [86.6, 2096.0], [86.7, 2096.0], [86.8, 2096.0], [86.9, 2099.0], [87.0, 2099.0], [87.1, 2105.0], [87.2, 2105.0], [87.3, 2105.0], [87.4, 2105.0], [87.5, 2107.0], [87.6, 2107.0], [87.7, 2107.0], [87.8, 2107.0], [87.9, 2107.0], [88.0, 2107.0], [88.1, 2108.0], [88.2, 2108.0], [88.3, 2109.0], [88.4, 2109.0], [88.5, 2110.0], [88.6, 2110.0], [88.7, 2111.0], [88.8, 2111.0], [88.9, 2112.0], [89.0, 2112.0], [89.1, 2112.0], [89.2, 2112.0], [89.3, 2116.0], [89.4, 2116.0], [89.5, 2117.0], [89.6, 2117.0], [89.7, 2119.0], [89.8, 2119.0], [89.9, 2123.0], [90.0, 2123.0], [90.1, 2126.0], [90.2, 2126.0], [90.3, 2126.0], [90.4, 2126.0], [90.5, 2132.0], [90.6, 2132.0], [90.7, 2132.0], [90.8, 2132.0], [90.9, 2135.0], [91.0, 2135.0], [91.1, 2136.0], [91.2, 2136.0], [91.3, 2139.0], [91.4, 2139.0], [91.5, 2142.0], [91.6, 2142.0], [91.7, 2143.0], [91.8, 2143.0], [91.9, 2143.0], [92.0, 2143.0], [92.1, 2146.0], [92.2, 2146.0], [92.3, 2147.0], [92.4, 2147.0], [92.5, 2151.0], [92.6, 2151.0], [92.7, 2155.0], [92.8, 2155.0], [92.9, 2157.0], [93.0, 2157.0], [93.1, 2158.0], [93.2, 2158.0], [93.3, 2158.0], [93.4, 2158.0], [93.5, 2158.0], [93.6, 2158.0], [93.7, 2163.0], [93.8, 2163.0], [93.9, 2163.0], [94.0, 2163.0], [94.1, 2163.0], [94.2, 2163.0], [94.3, 2166.0], [94.4, 2166.0], [94.5, 2168.0], [94.6, 2168.0], [94.7, 2170.0], [94.8, 2170.0], [94.9, 2177.0], [95.0, 2177.0], [95.1, 2180.0], [95.2, 2180.0], [95.3, 2180.0], [95.4, 2180.0], [95.5, 2184.0], [95.6, 2184.0], [95.7, 2184.0], [95.8, 2184.0], [95.9, 2189.0], [96.0, 2189.0], [96.1, 2191.0], [96.2, 2191.0], [96.3, 2193.0], [96.4, 2193.0], [96.5, 2195.0], [96.6, 2195.0], [96.7, 2196.0], [96.8, 2196.0], [96.9, 2197.0], [97.0, 2197.0], [97.1, 2198.0], [97.2, 2198.0], [97.3, 2204.0], [97.4, 2204.0], [97.5, 2206.0], [97.6, 2206.0], [97.7, 2207.0], [97.8, 2207.0], [97.9, 2215.0], [98.0, 2215.0], [98.1, 2222.0], [98.2, 2222.0], [98.3, 2223.0], [98.4, 2223.0], [98.5, 2225.0], [98.6, 2225.0], [98.7, 2226.0], [98.8, 2226.0], [98.9, 2230.0], [99.0, 2230.0], [99.1, 2233.0], [99.2, 2233.0], [99.3, 2243.0], [99.4, 2243.0], [99.5, 2251.0], [99.6, 2251.0], [99.7, 2270.0], [99.8, 2270.0], [99.9, 2315.0], [100.0, 2315.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 68.0, "series": [{"data": [[2100.0, 51.0], [2200.0, 13.0], [2300.0, 1.0], [600.0, 10.0], [700.0, 11.0], [200.0, 2.0], [800.0, 16.0], [900.0, 11.0], [1000.0, 19.0], [1100.0, 18.0], [300.0, 11.0], [1200.0, 17.0], [1300.0, 16.0], [1400.0, 28.0], [1500.0, 23.0], [400.0, 18.0], [1600.0, 28.0], [1700.0, 31.0], [1800.0, 43.0], [1900.0, 50.0], [500.0, 15.0], [2000.0, 68.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 31.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 308.0, "series": [{"data": [[0.0, 31.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 161.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 308.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 61.12400000000004, "minX": 1.6835121E12, "maxY": 61.12400000000004, "series": [{"data": [[1.6835121E12, 61.12400000000004]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6835121E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 510.25, "minX": 1.0, "maxY": 2172.363636363636, "series": [{"data": [[2.0, 865.0], [3.0, 875.0], [4.0, 936.0], [5.0, 874.0], [6.0, 954.0], [7.0, 953.0], [8.0, 1044.0], [9.0, 1012.0], [10.0, 1024.0], [11.0, 1059.0], [12.0, 1055.0], [13.0, 510.25], [14.0, 653.6666666666666], [15.0, 633.0], [16.0, 642.0], [17.0, 1146.0], [18.0, 765.0], [19.0, 572.0], [20.0, 523.6], [21.0, 777.5], [22.0, 667.6666666666667], [23.0, 844.0], [24.0, 696.3333333333333], [25.0, 723.3333333333333], [26.0, 657.5], [27.0, 853.5], [28.0, 752.3333333333333], [29.0, 744.0], [30.0, 912.5], [31.0, 696.0], [32.0, 822.3333333333333], [33.0, 1015.0], [34.0, 861.0], [35.0, 1432.5], [36.0, 743.3333333333334], [37.0, 1292.4], [38.0, 1188.0], [39.0, 1073.0], [41.0, 1063.111111111111], [40.0, 1580.0], [43.0, 1300.0], [42.0, 1502.5], [44.0, 1282.0], [45.0, 1307.5], [46.0, 776.0], [47.0, 1191.75], [48.0, 1300.8], [49.0, 1422.75], [50.0, 1474.0], [51.0, 1119.6666666666667], [52.0, 1088.5], [53.0, 1293.0], [54.0, 1448.3333333333335], [55.0, 1582.0], [56.0, 1375.5], [57.0, 1383.6666666666665], [58.0, 1299.2], [59.0, 1707.25], [60.0, 1703.6], [61.0, 1699.4545454545455], [62.0, 1342.0], [63.0, 1606.888888888889], [64.0, 1655.0], [66.0, 1534.1666666666667], [67.0, 1751.083333333333], [65.0, 1908.3333333333333], [68.0, 1322.6], [69.0, 1905.8], [71.0, 1628.2142857142858], [70.0, 2045.0], [72.0, 1819.0833333333333], [74.0, 1992.0714285714284], [75.0, 1788.4285714285716], [73.0, 2017.0], [77.0, 1960.2857142857144], [78.0, 1785.3125], [79.0, 2159.071428571429], [76.0, 2099.25], [81.0, 2148.6153846153848], [82.0, 1944.7916666666665], [83.0, 1838.5], [80.0, 2172.363636363636], [84.0, 1984.666666666667], [85.0, 1898.9090909090908], [86.0, 1789.0000000000002], [87.0, 1809.3333333333333], [88.0, 1764.75], [1.0, 739.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[61.12400000000004, 1552.7399999999984]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 88.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2030.1333333333334, "minX": 1.6835121E12, "maxY": 2066.6666666666665, "series": [{"data": [[1.6835121E12, 2030.1333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6835121E12, 2066.6666666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6835121E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1552.7399999999984, "minX": 1.6835121E12, "maxY": 1552.7399999999984, "series": [{"data": [[1.6835121E12, 1552.7399999999984]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6835121E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1552.674, "minX": 1.6835121E12, "maxY": 1552.674, "series": [{"data": [[1.6835121E12, 1552.674]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6835121E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5760000000000003, "minX": 1.6835121E12, "maxY": 0.5760000000000003, "series": [{"data": [[1.6835121E12, 0.5760000000000003]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6835121E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 283.0, "minX": 1.6835121E12, "maxY": 2315.0, "series": [{"data": [[1.6835121E12, 2315.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6835121E12, 2125.7000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6835121E12, 2232.9700000000003]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6835121E12, 2179.85]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6835121E12, 283.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6835121E12, 1725.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6835121E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 430.0, "minX": 32.0, "maxY": 1963.0, "series": [{"data": [[33.0, 430.0], [32.0, 1139.5], [36.0, 1376.0], [38.0, 1963.0], [41.0, 1815.0], [40.0, 1860.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 430.0, "minX": 32.0, "maxY": 1963.0, "series": [{"data": [[33.0, 430.0], [32.0, 1139.5], [36.0, 1376.0], [38.0, 1963.0], [41.0, 1815.0], [40.0, 1860.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6835121E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6835121E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6835121E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6835121E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6835121E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6835121E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6835121E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6835121E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6835121E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6835121E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6835121E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6835121E12, "title": "Total Transactions Per Second"}},
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

