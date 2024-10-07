<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articles=[
            ['title'=>"metode coping mechanism populer",'description'=>"deskripsi artikel 1",
            'body'=>"body artikel 1"],
            ['title'=>"jangan sembarang curhat",'description'=>"deskripsi artikel 2",
            'body'=>"body artikel 2"],
            ['title'=>"teman bisa menjadi lawan",'description'=>"deskripsi artikel 3",
            'body'=>"body artikel 3"]
        ];

        foreach($articles as $article){
            Article::create($article);
        }
    }
}