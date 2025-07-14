import { m } from 'framer-motion'
import { useTranslations } from 'next-intl'
import * as React from 'react'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  image: string
  github: string | undefined
  twitter: string | undefined
}

export const Team = () => {
  const t = useTranslations('team')
  const teamMembers: TeamMember[] = React.useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const member: TeamMember = {
        id: i,
        name: t(`members.${i}.name`),
        role: t(`members.${i}.role`),
        bio: t(`members.${i}.bio`),
        image: t(`members.${i}.image`),
        github: undefined,
        twitter: undefined,
      }

      const github = t(`members.${i}.github`, { fallback: '' })
      if (github) member.github = github

      const twitter = t(`members.${i}.twitter`, { fallback: '' })
      if (twitter) member.twitter = twitter

      return member
    })
  }, [t])

  return (
    <div id="team" className="mx-auto w-full max-w-7xl py-16 md:py-24">
      <m.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <m.h2
          className="text-3xl font-medium tracking-tight text-zinc-700 dark:text-zinc-200 md:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t('title')}
        </m.h2>
        <m.p
          className="mt-4 text-lg text-zinc-500 dark:text-zinc-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {t('subtitle')}
        </m.p>
      </m.div>

      <m.div
        className="grid grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </m.div>
    </div>
  )
}

const TeamMemberCard = ({
  member,
  index,
}: {
  member: TeamMember
  index: number
}) => {
  return (
    <m.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: 0.2 + index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
    >
      <m.div
        className="mb-4 overflow-hidden rounded-full border-2 border-accent"
        whileHover={{
          scale: 1.05,
          borderColor: '#00000000',
          transition: { duration: 0.2 },
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          width={120}
          height={120}
          className="size-[128px] object-cover"
        />
      </m.div>
      <h3 className="mb-1 text-xl font-semibold text-zinc-700 dark:text-zinc-200">
        {member.name}
      </h3>
      <p className="mb-3 text-sm font-medium text-accent">{member.role}</p>
      <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
        {member.bio}
      </p>

      <m.div
        className="flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
      >
        {member.github && member.github.length > 0 && (
          <m.a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="i-mingcute-github-fill size-5" />
          </m.a>
        )}
        {member.twitter && member.twitter.length > 0 && (
          <m.a
            href={member.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-zinc-700 dark:text-zinc-500 dark:hover:text-zinc-300"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="i-mingcute-twitter-fill size-5" />
          </m.a>
        )}
      </m.div>
    </m.div>
  )
}
