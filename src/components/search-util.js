const searcher = ( data, tags ) => {
    
    data = data.filter(elem => {
        if (elem.node.fields.slug !== "/aboutme/") {
            var subjectArray = elem.node.frontmatter.tags;
            var searchKeyArray = tags;

            subjectArray = subjectArray.map(function(x){return x.toUpperCase()})
            searchKeyArray = searchKeyArray.map(function(x){return x.toUpperCase()})

            var found = searchKeyArray.some(r => subjectArray.indexOf(r) >= 0)
            if (found) {
                return true
            }
            else {
                return false
            }
        }
        return false
    })
    return data
}

export default searcher;