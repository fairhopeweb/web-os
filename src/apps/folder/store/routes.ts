import { IFolder, IFile } from "../interfaces";

export const folderPool: Record<string, IFolder> = {
  root: {
    parent: null,
    icon: "root",
    id: "root",
    name: "/",
    createdOn: 0,
    updatedOn: 0,
    safe: true,
  },
  system: {
    parent: "root",
    icon: "system",
    id: "system",
    name: "system",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  applications: {
    parent: "root",
    icon: "applications",
    id: "applications",
    name: "applications",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  users: {
    parent: "root",
    icon: "user",
    id: "users",
    name: "users",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  home: {
    parent: "users",
    icon: "home",
    id: "home",
    name: "${user}",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  Pictures: {
    parent: "home",
    icon: "pictures",
    id: "Pictures",
    name: "Pictures",
    createdOn: 0,
    updatedOn: 0,
    safe: true,
  },
  Documents: {
    parent: "home",
    icon: "document",
    id: "Documents",
    name: "Documents",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  Downloads: {
    parent: "home",
    icon: "download",
    id: "Downloads",
    name: "Downloads",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  Desktop: {
    parent: "home",
    icon: "desktop",
    id: "Desktop",
    name: "Desktop",
    safe: true,
    createdOn: 0,
    updatedOn: 0,
  },
  "Desktop 1": {
    parent: "Desktop",
    icon: "folder",
    id: "Desktop 1",
    name: "Desktop 1",
    createdOn: 0,
    updatedOn: 0,
  },
  "Desktop 2": {
    parent: "Desktop",
    icon: "folder",
    id: "Desktop 2",
    name: "Desktop 2",
    createdOn: 0,
    updatedOn: 0,
  },
};

export const folderMap: IFile = {
  data: { id: "root" },
  appName: "folder",
  sortBy: "name",
  order: 0,
  files: {
    system: {
      data: { id: "system" },
      appName: "folder",
      sortBy: "name",
      order: 0,
      files: {},
    },
    applications: {
      data: { id: "applications" },
      appName: "folder",
      sortBy: "name",
      order: 1,
      files: {},
    },
    users: {
      data: { id: "users" },
      appName: "folder",
      sortBy: "name",
      order: 2,
      files: {
        home: {
          sortBy: "name",
          order: 0,
          data: { id: "home" },
          appName: "folder",
          files: {
            Pictures: {
              sortBy: "name",
              order: 0,
              data: { id: "Pictures" },
              appName: "folder",
              files: {
                img1: {
                  data: {
                    id: "img1",
                    name: "temple.jpg",
                    icon: "image",
                    path: "temple.jpg",
                  },
                  appName: "photo",
                  order: 0,
                },
                img2: {
                  data: {
                    id: "img2",
                    name: "lady.jpg",
                    icon: "image",
                    path: "lady.jpg",
                  },
                  appName: "photo",
                  order: 1,
                },
                img3: {
                  data: {
                    id: "img3",
                    name: "flower.jpg",
                    icon: "image",
                    path: "flower.jpg",
                  },
                  appName: "photo",
                  order: 2,
                },
              },
            },
            Documents: {
              data: { id: "Documents" },
              appName: "folder",
              files: {},
              sortBy: "name",
              order: 1,
            },
            Downloads: {
              sortBy: "name",
              order: 2,
              data: { id: "Downloads" },
              appName: "folder",
              files: {},
            },
            Desktop: {
              data: { id: "Desktop" },
              appName: "folder",
              sortBy: "name",
              order: 3,
              files: {
                "Desktop 1": {
                  data: { id: "Desktop 1" },
                  appName: "folder",
                  files: {},
                  sortBy: "name",
                  order: 0,
                },
                Pictures: {
                  data: { id: "Pictures" },
                  appName: "folder",
                  sortBy: "name",
                  order: 1,
                  symlink: "files.users.files.home.files.Pictures",
                },
                appManager: {
                  data: {
                    id: "appManager",
                    name: "App Manager",
                    icon: "appManager",
                  },
                  appName: "appManager",
                  sortBy: "name",
                  order: 2,
                },
                "Desktop 2": {
                  data: { id: "Desktop 2" },
                  appName: "folder",
                  files: {},
                  sortBy: "name",
                  order: 2,
                  // path: "/users/${user}/Desktop/Desktop 2",
                },
              },
            },
          },
        },
      },
    },
  },
};
