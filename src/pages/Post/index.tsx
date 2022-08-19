import axios from "axios";
import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { ExternalLink } from "../../components/Link";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import * as Styled from './styles'
import { IPost } from '../../types'
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const Post = () => {

  const username = import.meta.env.VITE_GITHUB_USERNAME;
  const repoName = import.meta.env.VITE_GITHUB_REPONAME;
  const { id } = useParams();
  const [isLoading, setisLoading] = useState(false)
  const [postData, setPostData] = useState<IPost>([] as unknown as IPost)

  const getPostData = useCallback(async () => {
    setisLoading(true);
    const { data } = await axios.get(`https://api.github.com/repos/${username}/${repoName}/issues/${id}`);
    setPostData(data)
    setisLoading(false);
  }, [postData])

  useEffect(() => {
    getPostData()
  }, [])
  return (
    <div>
      <Styled.CardProfile>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Styled.ProfileInfos>
              <div>
                <a href="/">
                  <ExternalLink
                    text="Voltar"
                    icon={<ArrowLeft />}
                    variant={"iconLeft"}
                  />
                </a>
                <a href={postData.html_url} target={"_blank"}>
                  <ExternalLink
                    text="Ver no Github"
                    icon={<ArrowSquareOut />}
                  />
                </a>
              </div>
              <span>{postData.title}</span>
              <ul>
                <li>
                  <GithubLogo size={18} />
                  {postData.number}
                </li>
                <li>
                  <Calendar size={18} />
                  Há 1 dia
                </li>
                <li>
                  <ChatCircle size={18} />
                  {postData.comments}
                </li>
              </ul>
            </Styled.ProfileInfos>
          </>
        )}
      </Styled.CardProfile>

      <Styled.PostBody>
        {
          <ReactMarkdown
            children={postData.body}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={dracula as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          />
        }
      </Styled.PostBody>
    </div>
  );
}