//Invalid Arguments Error Function    (bcz --D.R.Y.)
module.exports = {
    InvalidArgumentsError : function() {
        
        console.log("Invalid arguments. Refer help or documentation.");

        console.log("Help : Parameters to be passed : ")
        console.log("View as List : view, Source Path , -l")
        console.log("View as Tree : view, Source Path , -t")
        console.log("Treefy : treefy, Source Path , Destination Path")
        console.log("(Proper Metadata.json file is required)")
        console.log("UnTreefy : untreefy, Source Path , Destination Path")

    }
}
