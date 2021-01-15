function getDependencies(tree) {
    let allDependencies = (function getByNode(tree){

        if(!tree || !tree.dependencies){
            return {};
        }       

        let currentDependencies = Object.keys(tree.dependencies);
        return currentDependencies.reduce((accumulator, current) => {
            let dependency = current + "@" + tree.dependencies[current].version;
                accumulator.push(dependency);
            if(tree.dependencies[current].dependencies){
            }
            return accumulator;
        }, accumulatorInitializer)

        return dependencies;
    })(tree);
}
  

  module.exports = getDependencies