SheetDB = {
  read: function(){
    return read.apply(null, arguments);
  },
  write: function(){
    return write.apply(null, arguments);
  },
  version: "1.0"
}
