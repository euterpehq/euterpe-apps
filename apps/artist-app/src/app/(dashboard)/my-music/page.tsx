import React from "react";
import EmptyState from "./_components/empty-state";
import Releases from "./_components/releases";
import { getAlbums } from "@/lib/queries/album/get-albums";
import DataFetchErrorDisplay from "@/components/data-fetch-error-display";

export default async function Page() {
  const { data: releases } = await getAlbums();

  if (!releases) {
    return <DataFetchErrorDisplay />;
  }

  return (
    <>
      {releases.length === 0 ? (
        <EmptyState />
      ) : (
        <Releases releases={releases} />
      )}
    </>
  );
}
