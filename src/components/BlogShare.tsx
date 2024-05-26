import {
  FBShareBtn,
  RedditShareBtn,
  WhatsAppShareBtn,
  TelegramShareBtn,
  LinkedInShareBtn,
  EmailShareBtn,
  TwitterShareBtn,
  FBMessangerShareBtn,
} from "dv-social-share";

export default function BlogShare({ url }: { url: string }) {
  return (
    <div className="flex justify-between md:justify-start md:gap-8 lg:gap-12">
      <FBShareBtn url={url} openInNewTab />
      <WhatsAppShareBtn url={url} openInNewTab />
      <TelegramShareBtn url={url} openInNewTab />

      <LinkedInShareBtn url={url} openInNewTab />
      <RedditShareBtn url={url} openInNewTab />
      <TwitterShareBtn url={url} openInNewTab />
      <FBMessangerShareBtn url={url} openInNewTab />
      <EmailShareBtn url={url} openInNewTab />
    </div>
  );
}
