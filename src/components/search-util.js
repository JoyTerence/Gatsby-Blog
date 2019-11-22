const searcher = ( data, tags ) => {
    
    console.log(tags)
    
    data.forEach(element => {
        if (element.node.fields.slug !== "/aboutme") {
            var subjectArray = element.node.frontmatter.tags;
            var searchKeyArray = tags;
            var found = searchKeyArray.some(r => subjectArray.indexOf(r) >= 0)
            console.log(subjectArray)
            console.log(searchKeyArray)
            console.log(found)
        }
    });
}

export default searcher;