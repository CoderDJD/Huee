-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "uname" TEXT NOT NULL,
    "online" BOOLEAN NOT NULL,
    "avatar" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "github" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "youtube" TEXT NOT NULL,
    "discord" TEXT NOT NULL,
    "bmc" TEXT NOT NULL,
    "applicationUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ytWebhook" TEXT NOT NULL,
    "bmcWebhook" TEXT NOT NULL,
    "twtrWebhook" TEXT NOT NULL,
    "peopleNum" INTEGER NOT NULL,
    "open" BOOLEAN NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "name" TEXT NOT NULL,
    "uname" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "online" BOOLEAN NOT NULL,
    "projectId" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User.uname_unique" ON "User"("uname");

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Member.uname_unique" ON "Member"("uname");

-- AddForeignKey
ALTER TABLE "Project" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Member" ADD FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
