var createGraph = require('ngraph.graph');
let path = require('ngraph.path');

var g = createGraph();

export const nodenames = require('./nodenames.json')
const nodelinks = require('./nodelinks.json')
const intersections=require('./intersections.json')

function swapKeysAndValues(obj) {
    let ret={};
    for(var  key in obj){
        ret[obj[key]]=key;
    }
    return ret;
}

function getNamesArray(obj){
    const swapped = Object.entries(obj).map(
      ([key, value]) => value
    );
  
    return swapped;

}
export const namenodes=swapKeysAndValues(nodenames);

const makeNodelinks=(ints)=>{
    let arr=[];
    ints.forEach(intersection=>{
        let n=intersection.length;
        let dir=intersection[n-1];
        for(let i=0;i<n-2;i++){
            arr.push([intersection[i],intersection[n-2],dir]);
        }
    })
    return arr;
}

function buildGraph(inGraph,graph){
    inGraph.forEach(g=>{
        // check if node already exists
        let node1=graph.getNode(g[0]);
        let node2=graph.getNode(g[1]);
        if(!node1){
            node1=graph.addNode(g[0]);
        }
        if(!node2){
            node2=graph.addNode(g[1]);
        }
        if(!node2.data){
            node2.data={}
        }
        node2.data[node1.id]=g[2];
        if(!node1.data){
            node1.data={};
        }
        node1.data[node2.id]=-g[2]


        graph.addNode(g[0],node1.data);
        graph.addNode(g[1],node2.data);
        graph.addLink(g[0],g[1]);

    })
}
export function displayGraph(graph){

g.forEachLink(function(link) {
    console.dir(link);
});

g.forEachNode(function(node){
    console.log(node.id,node.data);
});

}


export function displayPath(path){
    const n=path.length;
    for(let i=n-1;i>0;i--){
        let fn=path[i];
        let tn=path[i-1];
        // console.log(fn.data[tn.id],tn)
        console.log("go",getDirection(fn.data[tn.id])," from ",nodenames[fn.id]," to ",nodenames[tn.id])
    }

}


let pathFinder;


function init(){
buildGraph(nodelinks,g);
buildGraph(makeNodelinks(intersections),g);
pathFinder = path.aStar(g);
let fromNodeId = 10001;
let toNodeId = 1;
let foundPath = pathFinder.find(fromNodeId, toNodeId);
// console.log(foundPath)
}
export default init;
export { pathFinder}



const getDirection=(dir)=>{
    switch(dir){
        case 1: 
        return 'east'
        case -1:
            return 'west'
        case 2:

        return 'north'
        case -2:
            return 'south'
        default:
            return "none"
    }
}