function remove(node1, node2) {
    var node1List = node1.classList;
    var node2List = node2.classList;
    for(var i=0;i++;i<node1List.length)
    {
        node1.removeClass(node1List.get(i));
        node2List.removeClass(node1List.get(i));
    }
}