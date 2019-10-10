import React from 'react';
import { Link } from 'react-router-dom';
import Exception from '@/components/Exception';

export default () => <Exception type="404" linkElement={Link} />;
