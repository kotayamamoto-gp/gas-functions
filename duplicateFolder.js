function duplicateFolder(srcFolderUrl, dstFolderUrl) {
  var srcFolder = getFolderByUrl(srcFolderUrl);
  var dstFolder = getFolderByUrl(dstFolderUrl);
  
  var dstFolderName = srcFolder.getName();
  
  var newFolder = dstFolder.createFolder(dstFolderName);
  copy(srcFolder, newFolder);//コピー元，コピー先
}

function copy(srcFolder, newFolder){
  var srcFiles = srcFolder.getFiles();//フォルダ内ファイルをゲット
  while(srcFiles.hasNext()) {
    var srcFile = srcFiles.next();
    Logger.log(srcFile.getName());
    srcFile.makeCopy(srcFile.getName(), newFolder);
  }
  var srcFolders = srcFolder.getFolders();//フォルダ内フォルダをゲット
  while(srcFolders.hasNext()) {
    var nextSrcFolder = srcFolders.next();
    Logger.log(nextSrcFolder.getName());
    var nextNewFolder = newFolder.createFolder(nextSrcFolder.getName());
    copy(nextSrcFolder, nextNewFolder); //再帰処理
  }
}