function searchFolder(driveId, searchFolderName) {
  let folderList = DriveApp.getFolderById(driveId).getFolders();
  while (folderList.hasNext()) {
    let folder = folderList.next();
    if (searchFolderName === folder.getName()) {
      return DriveApp.getFolderById(folder.getId());
    }
  }
}