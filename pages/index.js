
import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <article className="markdown-body entry-content container-lg f5" itemProp="text"><h3><a id="user-content-hi-there-" className="anchor" aria-hidden="true" href="#hi-there-"><svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Hi there <g-emoji className="g-emoji" alias="wave" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png">👋</g-emoji></h3>
<ul>
<li><g-emoji className="g-emoji" alias="telescope" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f52d.png">🔭</g-emoji> I’m currently working on Wordpress: cpt bootstrap boilerplate</li>
<li><g-emoji className="g-emoji" alias="seedling" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f331.png">🌱</g-emoji> I’m currently learning angular firebase mongo gatsby</li>
<li><g-emoji className="g-emoji" alias="dancers" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f46f.png">👯</g-emoji> I’m looking to collaborate on anything wordpress related</li>
<li><g-emoji className="g-emoji" alias="thinking" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f914.png">🤔</g-emoji> I’m looking for help with gatsby</li>
<li><g-emoji className="g-emoji" alias="speech_balloon" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4ac.png">💬</g-emoji> Ask me about github juggling api server maintnance life</li>
<li><g-emoji className="g-emoji" alias="mailbox" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f4eb.png">📫</g-emoji> How to reach me: <a href="mailto:anguru@gmail.com">anguru@gmail.com</a> | kodo.press</li>
<li><g-emoji className="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png">😄</g-emoji> Pronouns: JOhnMogi BabyCrushRage SpaceCatGuru</li>
<li><g-emoji className="g-emoji" alias="zap" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/26a1.png">⚡</g-emoji> Fun fact: COvid19 is the modern "Emperor's new clothes"</li>
</ul>
</article>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        Read <Link href="/posts/first-post"><a>this page!</a></Link>

      </section>
    </Layout>
  )
}