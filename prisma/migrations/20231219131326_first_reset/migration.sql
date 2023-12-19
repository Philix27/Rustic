-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "img_url" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "BookChapter" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "book_id" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    CONSTRAINT "BookChapter_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "BookChapterTopic" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "video_url" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME,
    "book_id" TEXT,
    "chapter_id" TEXT,
    CONSTRAINT "BookChapterTopic_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "Book" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "BookChapterTopic_chapter_id_fkey" FOREIGN KEY ("chapter_id") REFERENCES "BookChapter" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "img_url" TEXT,
    "video_url" TEXT,
    "story" TEXT NOT NULL,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "question" TEXT NOT NULL,
    "option1" TEXT NOT NULL,
    "option2" TEXT NOT NULL,
    "option3" TEXT,
    "option4" TEXT,
    "option5" TEXT,
    "option6" TEXT,
    "answer_index" INTEGER NOT NULL,
    "answer" TEXT,
    "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "BookChapter_title_key" ON "BookChapter"("title");

-- CreateIndex
CREATE UNIQUE INDEX "BookChapter_book_id_key" ON "BookChapter"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "BookChapterTopic_book_id_key" ON "BookChapterTopic"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "BookChapterTopic_chapter_id_key" ON "BookChapterTopic"("chapter_id");
