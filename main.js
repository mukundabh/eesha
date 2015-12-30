/* 
* @Author: bmdarshan
* @Date:   2015-12-25 20:11:17
* @Last Modified by:   bmdarshan
* @Last Modified time: 2015-12-27 18:32:07
*/

requirejs.config({
    baseUrl: 'public',
    paths: {
        react:'lib/react/react',
        reactBootstrap: 'lib/react-bootstrap/react-bootstrap',
        reactDom:'lib/react-dom/react-dom'
    },
});

requirejs(['app/pages/home']);