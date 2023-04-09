import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import { getSession } from 'next-auth/react';
import { redirectUser } from 'utils/auth';
import AddTagsSection from 'components/content/AddTagsSection';

type Props = {};

const PanelAddVideos: NextPage<Props> = ({}) => {
  return <>
    <AddTagsSection />
  </>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("GetServerSideProps");
  const session = await getSession(context);
  console.log("getSession");
  console.log(session);
  const { needRedirect, loginPath } = redirectUser(session);
  if (needRedirect) return loginPath;

  console.log("return Session");
  return {
    props: {
      session: await getSession(context),
    },
  };
};

export default PanelAddVideos;
