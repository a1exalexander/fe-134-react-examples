import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Stats.module.css';
import { Section } from '../Section';
import { Container } from '../Container';

export const Stats = ({ className, data }) => {
    return (
        <Container>
            <Section
                className={clsx(
                    'flex flex--jc-center gap-6',
                    styles.container,
                    className
                )}
            >
                {data.map(item => {
                    return (
                        <div
                            key={item.title}
                            className="flex flex--column flex--ai-center gap-1"
                        >
                            <span
                                style={{ color: item?.color }}
                                className="text-3 text--bold"
                            >
                                {item.value}
                            </span>
                            <span className="text-09">{item.title}</span>
                        </div>
                    );
                })}
            </Section>
        </Container>
    );
};

Stats.propTypes = {
    className: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.number,
        })
    ),
};
