import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchArticles, selectArticleBySlug } from '../../entities/article/model/articlesSlice'
import Article from '../../entities/article/ui/Article/Article'
import ArticleComments from '../../entities/article/ui/ArticleComments/ArticleComments'

import styles from './ArticlePage.module.scss'

function ArticlePage() {
  const { slug } = useParams() // Получаем slug из параметров URL
  const dispatch = useDispatch()

  // Получение статьи из стейта по slug
  const article = useSelector(selectArticleBySlug(slug))

  // Загрузка статьи
  useEffect(() => {
    dispatch(fetchArticles({ slug }))
  }, [dispatch, slug])

  return (
    <div className={styles.articlePage}>
      {article && <Article article={article} variant="full" />}
      <ArticleComments slug={slug} />
    </div>
  )
}

export default ArticlePage
