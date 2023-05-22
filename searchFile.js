function searchFile(driveId, fileName) {
  const fileList = DriveApp.getFolderById(driveId).getFiles();
  while (fileList.hasNext()) {
    const file = fileList.next();
    if (fileName === file.getName()) {
      return DriveApp.getFolderById(file.getId());
    }
  }
  return false;
}