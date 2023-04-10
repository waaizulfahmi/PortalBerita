import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NavigationLink extends React.Component {
    render() {
        var isActive =
            this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? " active nav-link" : "";

        return (
            <Link
                className={
                    "flex items-center text-white py-4 pl-6 nav-item" +
                    className
                }
                {...this.props}
            >
                {this.props.children}
            </Link>
        );
    }
}

NavigationLink.contextTypes = {
    router: PropTypes.object,
};

export default NavigationLink;
