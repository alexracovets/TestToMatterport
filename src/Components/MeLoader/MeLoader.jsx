import { motion, AnimatePresence } from "framer-motion";
import { Rings } from 'react-loader-spinner';

import useLoading from '../../store/useLoading';

import s from './MeLoader.module.scss';
export default function MeLoader() {
    const loadFile = useLoading((state) => state.loadFile);
    const isLoaded = useLoading((state) => state.isLoaded);

    return (
        <AnimatePresence>
            {!isLoaded ?
                <motion.div
                    className={s.loader}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    exit={{ opacity: 0, scale: 2 }}
                >
                    <div className={s.loader__wrapper}>
                        <div className={s.loader_wrapper}>
                            <Rings
                                visible={true}
                                height="10rem"
                                width="10rem"
                                r="5rem"
                                color="#fff"
                                ariaLabel="puff-loading"
                                wrapperClass={s.puff}
                            />
                        </div>
                        <div className={s.loader_title}>
                            ЗАВАНТАЖЕННЯ ТУРУ:
                        </div>
                        <div className={s.loader_panoram}>
                            {loadFile}
                        </div>
                    </div>
                </motion.div>
                : null
            }

        </AnimatePresence>
    )
}