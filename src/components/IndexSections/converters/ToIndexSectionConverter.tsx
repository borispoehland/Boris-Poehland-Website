import Image from 'next/image';
import { ElementType, ReactNode } from 'react';

export interface IIndexSection {
  actionButton?: ReactNode;
  heading: string;
  imgSrc: string;
  imgAlt: string;
  imgPriority?: boolean;
  tag?: keyof HTMLElementTagNameMap;
  textContent: ReactNode;
}

const LeftLaneItem = ({
  heading,
  imgAlt,
  imgSrc,
  imgPriority,
  textContent,
  actionButton,
  tag,
}: IIndexSection) => {
  const Tag = tag as ElementType;
  return (
    <div className="left-lane-item">
      <div className="left-lane-item__image">
        <Image
          src={imgSrc}
          width={1920}
          height={1080}
          alt={imgAlt}
          priority={imgPriority}
        />
      </div>
      <div className="left-lane-item__heading">
        <h1>{heading}</h1>
      </div>
      <Tag className="left-lane-item__text">{textContent}</Tag>
      {actionButton && (
        <div className="left-lane-item__action">{actionButton}</div>
      )}
    </div>
  );
};

const RightLaneItem = ({ imgAlt, imgSrc, imgPriority }: IIndexSection) => (
  <div className="right-lane-item">
    <Image
      src={imgSrc}
      alt={imgAlt}
      layout="fill"
      objectFit="contain"
      priority={imgPriority}
    />
  </div>
);

const ToIndexSectionConverter = (props: IIndexSection) => {
  const { heading } = props;
  return [
    <LeftLaneItem key={heading} {...props} />,
    <RightLaneItem key={heading} {...props} />,
  ];
};

LeftLaneItem.defaultProps = {
  tag: 'section',
};

export default ToIndexSectionConverter;