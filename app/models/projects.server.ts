import type { Project } from "@prisma/client";

import { prisma } from "~/db.server";

export interface NewProject {
  name: string,
  screen: string,
  link: string,
  github: string,
  description: string,
}

export type { Project } from "@prisma/client";

export function findProjectById({ id }: { id: number }) {
  return prisma.project.findFirst({
    where: { id },
  });
}

export async function findProjects() {
  const projects = await prisma.project.findMany();
  return projects;
}

export function createProject({
  name,
  screen,
  link,
  github,
  description,
}: NewProject) {
  return prisma.project.create({
    data: {
      name,
      screen,
      link,
      github,
      description
    },
  });
}

export function updateProject({
  id,
  name,
  screen,
  link,
  github,
  description,
}: Project) {
  return prisma.project.update({
    where: { id },
    data: {
      name,
      screen,
      link,
      github,
      description
    },
  });
}

export function deleteProjectById({
  id
}: { id: number }) {
  return prisma.project.delete({
    where: { id },
  });
}
